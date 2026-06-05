import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import XPBar from "./XPBar";
import Hamburger from "./Hamburger";
import UserMenu from "./UserMenu";
import { useXP } from "../Context/XPContext";

const pages = [
  { path: "/progresso", label: "Meu Progresso", emoji: "🏆", slug: null },
  {
    path: "/fundamentos",
    label: "Fundamentos de Ciência de Dados e Python",
    emoji: "📊",
    slug: "fundamentos",
  },
  {
    path: "/pandas",
    label: "Python para Ciência de Dados — Pandas",
    emoji: "🐼",
    slug: "pandas",
  },
  {
    path: "/exploracao",
    label: "Exploração de Dados e Estatística",
    emoji: "🔍",
    slug: "exploracao",
  },
  {
    path: "/visualizacao",
    label: "Visualização de Dados",
    emoji: "📈",
    slug: "visualizacao",
  },
  {
    path: "/preprocessamento",
    label: "Pré-Processamento de Dados",
    emoji: "⚙️",
    slug: "preprocessamento",
  },
];

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isModuleUnlocked } = useXP();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <ul className="nav flex-column gap-2">
      {pages.map((page) => {
        const locked = page.slug ? !isModuleUnlocked(page.slug) : false;

        return (
          <li className="nav-item" key={page.path}>
            {locked ? (
              <button
                type="button"
                className="nav-link btn btn-link text-start w-100 disabled"
                disabled
              >
                <span className="nav-link__emoji">{page.emoji}</span>
                {page.label} 🔒
              </button>
            ) : (
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
            )}
          </li>
        );
      })}
    </ul>
  );
}
