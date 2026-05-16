import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { AuthProvider, useAuth } from "./Context/AuthContext";
import { XPProvider } from "./Context/XPContext";

import XPBar from "./components/XPBar";
import Hamburger from "./components/Hamburger";
import UserMenu from "./components/UserMenu";
import AuthPage from "./pages/AuthPage";

import Fundamentos from "./pages/Fundamentos";
import Pandas from "./pages/Pandas";
import Exploracao from "./pages/Exploracao";
import Visualizacao from "./pages/Visualizacao";
import Progresso from "./pages/Progresso";

const pages = [
  { key: "progresso", label: "Meu progresso", emoji: "🏆" },
  {
    key: "fundamentos",
    label: "Fundamentos de Ciência de Dados e Python",
    emoji: "📊",
  },
  {
    key: "pandas",
    label: "Python para Ciência de Dados — Pandas",
    emoji: "🐼",
  },
  {
    key: "exploracao",
    label: "Exploração de Dados e Estatística",
    emoji: "🔍",
  },
  { key: "visualizacao", label: "Visualização de Dados", emoji: "📈" },
];

const pageComponents = {
  progresso: Progresso,
  fundamentos: Fundamentos,
  pandas: Pandas,
  exploracao: Exploracao,
  visualizacao: Visualizacao,
};

// Shell principal — só renderiza se o usuário estiver autenticado
function AppShell() {
  const { user, authLoading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(pages[0]);

  // Tela de carregamento inicial enquanto o Firebase verifica a sessão
  if (authLoading) {
    return (
      <div className="auth-loading-screen">
        <span className="auth-loading-emoji">📊</span>
        <p>Carregando...</p>
      </div>
    );
  }

  // Sem usuário → exibe tela de login/cadastro
  if (!user) {
    return <AuthPage />;
  }

  const ActivePageComponent = pageComponents[activePage.key] || null;

  return (
    <XPProvider>
      <div className="app-shell">
        <header className="app-header">
          <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          <span className="app-header__title">
            <span className="app-header__emoji">📊</span> DataSci Academy
          </span>
          {/* Avatar com menu de usuário */}
          <UserMenu />
        </header>

        <XPBar />

        <div
          className={`menu-backdrop${menuOpen ? " show" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className={`side-menu${menuOpen ? " open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="side-menu-inner">
            <div className="menu-heading">Módulos</div>
            <ul className="nav flex-column gap-2">
              {pages.map((page) => (
                <li className="nav-item" key={page.key}>
                  <button
                    type="button"
                    className={`nav-link btn btn-link text-start w-100${
                      activePage.key === page.key ? " active" : ""
                    }`}
                    onClick={() => {
                      setActivePage(page);
                      setMenuOpen(false);
                    }}
                  >
                    <span className="nav-link__emoji">{page.emoji}</span>
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="app-main">
          <div className="content-placeholder">
            {ActivePageComponent ? <ActivePageComponent /> : null}
          </div>
        </main>
      </div>
    </XPProvider>
  );
}

// Raiz do app — AuthProvider engloba tudo
export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
