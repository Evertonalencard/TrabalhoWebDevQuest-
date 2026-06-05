import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";
import { getProgress } from "../services/userService";
import { completeModule as completeModuleRequest } from "../services/progressService";
import { addXP as addXPRequest } from "../services/xpService";

const XPContext = createContext(null);
const XP_PER_LEVEL = 100;

function toModuleItem(item) {
  return {
    id: item.moduleId,
    key: item.moduleSlug,
    slug: item.moduleSlug,
    title: item.moduleTitle,
    completed: item.completed ?? false,
    score: item.score ?? 0,
    gainedXP: item.gainedXP ?? 0,
    attempts: item.attempts ?? 0,
    locked: item.locked ?? false,
  };
}

function mapModules(moduleProgress = []) {
  return moduleProgress.reduce((acc, item) => {
    acc[item.moduleSlug] = toModuleItem(item);
    return acc;
  }, {});
}

function mapModuleList(moduleProgress = []) {
  return moduleProgress.map(toModuleItem);
}

export function XPProvider({ children }) {
  const { user } = useAuth();

  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [modules, setModules] = useState({});
  const [moduleList, setModuleList] = useState([]);
  const [completedModules, setCompletedModules] = useState(0);
  const [totalModules, setTotalModules] = useState(0);
  const [loading, setLoading] = useState(true);

  function applyProgress(data) {
    const progress = data.moduleProgress ?? [];

    setXp(data.totalXP ?? 0);
    setLevel(data.level ?? 1);
    setModules(mapModules(progress));
    setModuleList(mapModuleList(progress));
    setCompletedModules(data.completedModules ?? 0);
    setTotalModules(data.totalModules ?? progress.length);
  }

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      setLoading(true);

      if (!user) {
        setXp(0);
        setLevel(1);
        setModules({});
        setModuleList([]);
        setCompletedModules(0);
        setTotalModules(0);
        setLoading(false);
        return;
      }

      try {
        const data = await getProgress();
        if (!cancelled) {
          applyProgress(data);
        }
      } catch (err) {
        console.warn("Erro ao carregar progresso:", err.message);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProgress();

    return () => {
      cancelled = true;
    };
  }, [user]);

  async function addXP(amount) {
    if (!user) {
      return false;
    }

    try {
      const data = await addXPRequest(amount, "bonus");

      setXp(data.user?.xp ?? xp);
      setLevel(data.user?.level ?? level);

      return data.leveledUp ?? false;
    } catch (err) {
      console.warn("Falha ao adicionar XP:", err.message);
      return false;
    }
  }

  async function completeModule(moduleSlug, score, totalQuestions) {
    if (!user) {
      return {
        leveledUp: false,
        gainedXP: 0,
      };
    }

    try {
      const result = await completeModuleRequest(
        moduleSlug,
        score,
        totalQuestions,
      );

      const progress = await getProgress();
      applyProgress(progress);

      return {
        leveledUp: result.leveledUp ?? false,
        gainedXP: result.gainedXP ?? 0,
      };
    } catch (err) {
      console.warn("Falha ao completar modulo:", err.message);

      return {
        leveledUp: false,
        gainedXP: 0,
      };
    }
  }

  const xpInCurrentLevel = xp % XP_PER_LEVEL;
  const xpPercent = (xpInCurrentLevel / XP_PER_LEVEL) * 100;

  return (
    <XPContext.Provider
      value={{
        xp,
        level,
        xpPercent,
        xpInCurrentLevel,
        XP_PER_LEVEL,
        addXP,
        loading,
        modules,
        moduleList,
        completedModules,
        totalModules,
        completeModule,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useXP() {
  return useContext(XPContext);
}
