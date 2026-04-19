function hamburger() {
  return (
    <button
      id="hamburger"
      aria-label="Abrir menu de navegação"
      aria-expanded="true"
      aria-controls="sidebar"
    >
      <span class="bar" id="bar1"></span>
      <span class="bar" id="bar2"></span>
      <span class="bar" id="bar3"></span>
    </button>
  );
}
export default hamburger;
