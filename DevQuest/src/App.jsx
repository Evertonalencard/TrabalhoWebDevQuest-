import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { XPProvider } from "./Context/XPContext";
import XPBar from "./components/XPBar";
import Hamburger from "./components/Hamburger";
import Fundamentos from "./pages/Fundamentos";
import Pandas from "./pages/Pandas";
import Exploracao from "./pages/Exploracao";
import Visualizacao from "./pages/Visualizacao";

const pages = [
  {
    key: "fundamentos",
    label: "Fundamentos de Ciência de Dados e Python",
    emoji: "🐍",
  },
  {
    key: "pandas",
    label: "Python para Ciência de Dados (Pandas)",
    emoji: "🐼",
  },
  {
    key: "exploracao",
    label: "Exploração de Dados e Estatística",
    emoji: "🔍",
  },
  { key: "visualizacao", label: "Visualização de Dados", emoji: "📊" },
];

const pageComponents = {
  fundamentos: Fundamentos,
  pandas: Pandas,
  exploracao: Exploracao,
  visualizacao: Visualizacao,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(pages[0]);
  const ActivePageComponent = pageComponents[activePage.key] || null;

  return (
    <XPProvider>
      <div className="app-shell">
        <header className="app-header">
          <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          <span className="app-header__title">
            <span className="app-header__emoji">📘</span>
            DataSci Academy
          </span>
        </header>

        <XPBar />

        <div
          className={`menu-backdrop ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className={`side-menu ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="side-menu-inner">
            <div className="menu-heading">Módulos</div>
            <ul className="nav flex-column gap-2">
              {pages.map((page) => (
                <li className="nav-item" key={page.key}>
                  <button
                    type="button"
                    className={`nav-link btn btn-link text-start w-100 ${activePage.key === page.key ? "active" : ""}`}
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

export default App;
