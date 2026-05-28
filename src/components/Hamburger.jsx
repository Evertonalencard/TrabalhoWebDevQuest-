function Hamburger({ open, onClick }) {
  return (
    <button
      type="button"
      className="menu-toggle btn btn-link p-2"
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      onClick={onClick}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {open ? (
          <>
            <line x1="5" y1="5" x2="19" y2="19" stroke="#1B3AB3" strokeWidth="2" strokeLinecap="round"/>
            <line x1="19" y1="5" x2="5" y2="19" stroke="#1B3AB3" strokeWidth="2" strokeLinecap="round"/>
          </>
        ) : (
          <>
            <rect x="3" y="6" width="18" height="2" rx="1" fill="#1B3AB3"/>
            <rect x="3" y="11" width="18" height="2" rx="1" fill="#1B3AB3"/>
            <rect x="3" y="16" width="18" height="2" rx="1" fill="#1B3AB3"/>
          </>
        )}
      </svg>
    </button>
  );
}

export default Hamburger;
