import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const token = authService.getToken();

        if (!token) {
          setAuthLoading(false);
          return;
        }

        const me = await authService.getMe();
        setUser(me);
      } catch (err) {
        authService.logout();
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    }

    loadUser();
  }, []);

  async function login(email, password) {
    try {
      setAuthError(null);

      const user = await authService.login(email, password);

      setUser(user);
    } catch (err) {
      setAuthError(err.message);
      throw err;
    }
  }

  async function register(email, displayName, password) {
    try {
      setAuthError(null);

      const user = await authService.register(email, displayName, password);

      setUser(user);
    } catch (err) {
      setAuthError(err.message);
      throw err;
    }
  }

  function logout() {
    authService.logout();
    setUser(null);
  }

  async function loginWithGoogle() {
    const err = new Error("Login com Google não está disponível.");
    err.code = "auth/unsupported-operation";
    throw err;
  }

  async function resetPassword(email) {
    const err = new Error("Recuperação de senha não está disponível.");
    err.code = "auth/unsupported-operation";
    throw err;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        authError,
        setAuthError,
        login,
        register,
        logout,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
