import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fundamentos from "./pages/Fundamentos";
import Pandas from "./pages/Pandas";
import Exploracao from "./pages/Exploracao";
import Visualizacao from "./pages/Visualizacao";

const pages = [
  {
    key: "fundamentos",
    label: "Fundamentos de Ciência de Dados e Python",
    description:
      "Página com conteúdo semelhante, pronta para ser usada como uma introdução aos fundamentos de ciência de dados e Python.",
  },
  {
    key: "pandas",
    label: "Python para Ciência de Dados (Pandas)",
    description:
      "Página com conteúdo semelhante, voltada para análise de dados com Pandas em Python.",
  },
  {
    key: "exploracao",
    label: "Exploração de Dados e Estatística",
    description:
      "Página com conteúdo semelhante, focada em exploração de dados e estatística para tomada de decisões.",
  },
  {
    key: "visualizacao",
    label: "Visualização de Dados",
    description:
      "Página com conteúdo semelhante, dedicada à visualização de dados de maneira clara e efetiva.",
  },
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
    <div className="app-shell">
      <header className="app-header">
        <button
          type="button"
          className="menu-toggle btn btn-link p-2"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="6" width="18" height="2" rx="1" fill="#1B3AB3" />
            <rect x="3" y="11" width="18" height="2" rx="1" fill="#1B3AB3" />
            <rect x="3" y="16" width="18" height="2" rx="1" fill="#1B3AB3" />
          </svg>
        </button>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-menu-inner">
          <div className="menu-heading">Navegação</div>
          <ul className="nav flex-column gap-2">
            {pages.map((page) => (
              <li className="nav-item" key={page.key}>
                <button
                  type="button"
                  className={`nav-link btn btn-link text-start w-100 ${
                    activePage.key === page.key ? "active" : ""
                  }`}
                  onClick={() => {
                    setActivePage(page);
                    setMenuOpen(false);
                  }}
                >
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
  );
}

export default App;
