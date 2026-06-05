import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { XPProvider, useXP } from "./Context/XPContext";

import AppLayout from "./components/AppLayout";
import AuthPage from "./pages/AuthPage";
import Progresso from "./pages/Progresso";
import Fundamentos from "./pages/Fundamentos";
import Pandas from "./pages/Pandas";
import Exploracao from "./pages/Exploracao";
import Visualizacao from "./pages/Visualizacao";
import PreProcessamento from "./pages/PreProcessamento";

function LoadingScreen() {
  return (
    <div className="auth-loading-screen">
      <span className="auth-loading-emoji">📊</span>
      <p>Carregando...</p>
    </div>
  );
}

function ModuleRoute({ moduleSlug, children }) {
  const { loading, isModuleUnlocked } = useXP();

  if (loading) {
    return <LoadingScreen />;
  }

  return isModuleUnlocked(moduleSlug) ? (
    children
  ) : (
    <Navigate to="/progresso" replace />
  );
}

// Rota protegida — redireciona para /login se não autenticado
function PrivateRoute({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <LoadingScreen />;
  }

  return user ? children : <Navigate to="/login" replace />;
}

// Rota pública — redireciona para /progresso se já estiver logado
function PublicRoute({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <LoadingScreen />;
  }

  return !user ? children : <Navigate to="/progresso" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rota pública: login/cadastro */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />

          {/* Rotas privadas: todas dentro do AppLayout (header + menu) */}
          <Route
            element={
              <PrivateRoute>
                <XPProvider>
                  <AppLayout />
                </XPProvider>
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/progresso" replace />} />
            <Route path="/progresso" element={<Progresso />} />

            <Route
              path="/fundamentos"
              element={
                <ModuleRoute moduleSlug="fundamentos">
                  <Fundamentos />
                </ModuleRoute>
              }
            />

            <Route
              path="/pandas"
              element={
                <ModuleRoute moduleSlug="pandas">
                  <Pandas />
                </ModuleRoute>
              }
            />

            <Route
              path="/exploracao"
              element={
                <ModuleRoute moduleSlug="exploracao">
                  <Exploracao />
                </ModuleRoute>
              }
            />

            <Route
              path="/visualizacao"
              element={
                <ModuleRoute moduleSlug="visualizacao">
                  <Visualizacao />
                </ModuleRoute>
              }
            />

            <Route
              path="/preprocessamento"
              element={
                <ModuleRoute moduleSlug="preprocessamento">
                  <PreProcessamento />
                </ModuleRoute>
              }
            />
          </Route>

          {/* Qualquer rota desconhecida → redireciona */}
          <Route path="*" element={<Navigate to="/progresso" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
