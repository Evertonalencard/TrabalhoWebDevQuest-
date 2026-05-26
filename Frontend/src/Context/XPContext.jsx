import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { useAuth } from "./AuthContext";

const XPContext = createContext(null);

const XP_PER_CORRECT = 20;
const XP_PER_LEVEL = 100;

function calculateLevel(totalXP) {
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

export function XPProvider({ children }) {
  const { user } = useAuth();
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [modules, setModules] = useState({});
  const [loading, setLoading] = useState(true);

  // Recarrega XP sempre que o usuário mudar (login/logout)
  useEffect(() => {
    if (!user) {
      setXp(0);
      setLevel(1);
      setModules({});
      setLoading(false);
      return;
    }

    async function loadXP() {
      setLoading(true);
      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setXp(data.xp || 0);
          setLevel(calculateLevel(data.xp || 0));
          setModules(data.modules || {});
        } else {
          await setDoc(ref, { xp: 0, level: 1, modules: {} });
        }
      } catch (e) {
        console.warn("Firebase offline, usando estado local", e);
      } finally {
        setLoading(false);
      }
    }

    loadXP();
  }, [user]);

  async function addXP(amount) {
    const newXp = xp + amount;
    const newLevel = calculateLevel(newXp);
    setXp(newXp);
    setLevel(newLevel);
    if (!user) return newLevel > level;
    try {
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, { xp: increment(amount), level: newLevel });
    } catch (e) {
      console.warn("Firebase offline, XP salvo apenas localmente");
    }
    return newLevel > level; // true se subiu de nível
  }

  async function completeModule(moduleKey, score, gainedXP) {
    if (modules[moduleKey]?.completed) return false;
    const updatedModules = {
      ...modules,
      [moduleKey]: {
        completed: true,
        score,
        gainedXP,
        completedAt: new Date().toISOString(),
      },
    };
    setModules(updatedModules);
    if (!user) return true;
    try {
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, { modules: updatedModules });
    } catch (e) {
      console.warn("Erro ao salvar progresso do módulo", e);
    }
    return true;
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
        XP_PER_CORRECT,
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
  return useContext(XPContext);
}
