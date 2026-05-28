import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { useAuth } from "./AuthContext";

import {
  getProgress,
} from "../services/userService";

import {
  completeModule as completeModuleRequest,
} from "../services/progressService";

import {
  addXP as addXPRequest,
} from "../services/xpService";

const XPContext = createContext(null);

const XP_PER_LEVEL = 100;

function mapModules(
  moduleProgress = [],
) {
  return moduleProgress.reduce(
    (acc, item) => {
      acc[item.moduleSlug] = {
        completed:
          item.completed ?? false,

        score:
          item.score ?? 0,

        gainedXP:
          item.gainedXP ?? 0,

        attempts:
          item.attempts ?? 0,
      };

      return acc;
    },
    {},
  );
}

export function XPProvider({
  children,
}) {
  const { user } = useAuth();

  const [xp, setXp] =
    useState(0);

  const [level, setLevel] =
    useState(1);

  const [modules, setModules] =
    useState({});

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!user) {
      setXp(0);
      setLevel(1);
      setModules({});
      setLoading(false);
      return;
    }

    async function loadProgress() {
      setLoading(true);

      try {
        const data =
          await getProgress();

        setXp(
          data.totalXP ?? 0,
        );

        setLevel(
          data.level ?? 1,
        );

        setModules(
          mapModules(
            data.moduleProgress,
          ),
        );
      } catch (err) {
        console.warn(
          "Erro ao carregar progresso:",
          err.message,
        );
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [user]);

  async function addXP(
    amount,
  ) {
    if (!user) {
      return false;
    }

    try {
      const data =
        await addXPRequest(
          amount,
          "bonus",
          null,
        );

      setXp(
        data.user?.xp ?? xp,
      );

      setLevel(
        data.user?.level ??
          level,
      );

      return (
        data.leveledUp ??
        false
      );
    } catch (err) {
      console.warn(
        "Falha ao adicionar XP:",
        err.message,
      );

      return false;
    }
  }

  async function completeModule(
    moduleSlug,
    score,
    totalQuestions,
  ) {
    if (!user) {
      return {
        leveledUp: false,
        gainedXP: 0,
      };
    }

    try {
      const result =
        await completeModuleRequest(
          moduleSlug,
          score,
          totalQuestions,
        );

      const progress =
        await getProgress();

      setXp(
        progress.totalXP ??
          0,
      );

      setLevel(
        progress.level ??
          1,
      );

      setModules(
        mapModules(
          progress.moduleProgress,
        ),
      );

      return {
        leveledUp:
          result.leveledUp ??
          false,

        gainedXP:
          result.gainedXP ??
          0,
      };
    } catch (err) {
      console.warn(
        "Falha ao completar módulo:",
        err.message,
      );

      return {
        leveledUp: false,
        gainedXP: 0,
      };
    }
  }

  const xpInCurrentLevel =
    xp % XP_PER_LEVEL;

  const xpPercent =
    (xpInCurrentLevel /
      XP_PER_LEVEL) *
    100;

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
        completeModule,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(
    XPContext,
  );
}