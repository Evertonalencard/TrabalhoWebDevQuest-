import { useState, useRef, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import "../css/UserMenu.css";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  function getInitials(name) {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  const displayName =
    user?.displayName || user?.email?.split("@")[0] || "Usuário";
  const initials = getInitials(user?.displayName || displayName);

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        className="user-menu-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu do usuário"
        aria-expanded={open}
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={displayName}
            className="user-menu-avatar user-menu-avatar--photo"
          />
        ) : (
          <span className="user-menu-avatar user-menu-avatar--initials">
            {initials}
          </span>
        )}
      </button>

      {open && (
        <div className="user-menu-dropdown" role="menu">
          <div className="user-menu-header">
            <span className="user-menu-name">{displayName}</span>
            <span className="user-menu-email">{user?.email}</span>
          </div>
          <div className="user-menu-divider" />
          <button
            className="user-menu-item user-menu-item--logout"
            role="menuitem"
            onClick={async () => {
              setOpen(false);
              await logout();
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sair da conta
          </button>
        </div>
      )}
    </div>
  );
}
