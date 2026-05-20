import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import XPBar from "./XPBar";
import Hamburger from "./Hamburger";
import UserMenu from "./UserMenu";

const pages = [
  { path: "/progresso", label: "Meu Progresso", emoji: "🏆" },
  {
    path: "/fundamentos",
    label: "Fundamentos de Ciência de Dados e Python",
    emoji: "📊",
  },
  {
    path: "/pandas",
    label: "Python para Ciência de Dados — Pandas",
    emoji: "🐼",
  },
  {
    path: "/exploracao",
    label: "Exploração de Dados e Estatística",
    emoji: "🔍",
  },
  { path: "/visualizacao", label: "Visualização de Dados", emoji: "📈" },
];

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <span className="app-header__title">
          <span className="app-header__emoji">📊</span> DataSci Academy
        </span>
        <UserMenu />
      </header>

      <XPBar />

      {/* Backdrop escurecido ao abrir menu */}
      <div
        className={`menu-backdrop${menuOpen ? " show" : ""}`}
        onClick={closeMenu}
      />

      {/* Menu lateral */}
      <nav
        className={`side-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-menu-inner">
          <div className="menu-heading">Módulos</div>
          <ul className="nav flex-column gap-2">
            {pages.map((page) => (
              <li className="nav-item" key={page.path}>
                {/* NavLink adiciona a classe "active" automaticamente na rota atual */}
                <NavLink
                  to={page.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link btn btn-link text-start w-100${isActive ? " active" : ""}`
                  }
                >
                  <span className="nav-link__emoji">{page.emoji}</span>
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Outlet renderiza a página da rota atual */}
      <main className="app-main">
        <div className="content-placeholder">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
