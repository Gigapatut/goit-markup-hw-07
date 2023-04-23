(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-mob-menu-open]"),
    closeMenuBtn: document.querySelector("[data-mob-menu-close]"),
    menu: document.querySelector("[data-mob-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();