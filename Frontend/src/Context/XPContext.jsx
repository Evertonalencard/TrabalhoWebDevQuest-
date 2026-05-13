import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const XPContext = createContext(null);

const XP_PER_CORRECT = 20;
const XP_PER_LEVEL = 100;

export function XPProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [userId] = useState("user_default"); // Simplificado sem auth
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadXP() {
      try {
        const ref = doc(db, "users", userId);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setXp(data.xp || 0);
          setLevel(Math.floor((data.xp || 0) / XP_PER_LEVEL) + 1);
        } else {
          await setDoc(ref, { xp: 0, level: 1 });
        }
      } catch (e) {
        console.warn("Firebase offline, usando estado local", e);
      } finally {
        setLoading(false);
      }
    }
    loadXP();
  }, [userId]);

  async function addXP(amount) {
    const newXp = xp + amount;
    const newLevel = Math.floor(newXp / XP_PER_LEVEL) + 1;
    setXp(newXp);
    setLevel(newLevel);
    try {
      const ref = doc(db, "users", userId);
      await updateDoc(ref, { xp: increment(amount), level: newLevel });
    } catch (e) {
      console.warn("Firebase offline, XP salvo apenas localmente");
    }
    return newLevel > level; // retorna true se subiu de nível
  }

  const xpInCurrentLevel = xp % XP_PER_LEVEL;
  const xpPercent = (xpInCurrentLevel / XP_PER_LEVEL) * 100;

  return (
    <XPContext.Provider value={{ xp, level, xpPercent, xpInCurrentLevel, XP_PER_LEVEL, XP_PER_CORRECT, addXP, loading }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(XPContext);
}
