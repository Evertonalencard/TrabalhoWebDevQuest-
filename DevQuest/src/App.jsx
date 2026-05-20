import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { XPProvider } from "./Context/XPContext";

import AppLayout from "./components/AppLayout";
import AuthPage from "./pages/AuthPage";
import Progresso from "./pages/Progresso";
import Fundamentos from "./pages/Fundamentos";
import Pandas from "./pages/Pandas";
import Exploracao from "./pages/Exploracao";
import Visualizacao from "./pages/Visualizacao";

// Rota protegida — redireciona para /login se não autenticado
function PrivateRoute({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="auth-loading-screen">
        <span className="auth-loading-emoji">📊</span>
        <p>Carregando...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

// Rota pública — redireciona para /progresso se já estiver logado
function PublicRoute({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="auth-loading-screen">
        <span className="auth-loading-emoji">📊</span>
        <p>Carregando...</p>
      </div>
    );
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
            <Route path="/progresso"    element={<Progresso />} />
            <Route path="/fundamentos"  element={<Fundamentos />} />
            <Route path="/pandas"       element={<Pandas />} />
            <Route path="/exploracao"   element={<Exploracao />} />
            <Route path="/visualizacao" element={<Visualizacao />} />
          </Route>

          {/* Qualquer rota desconhecida → redireciona */}
          <Route path="*" element={<Navigate to="/progresso" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
