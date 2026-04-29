(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const overlay = document.querySelector("[data-menu-overlay]");
  const panel = document.querySelector("[data-menu-panel]");
  const closeButton = document.querySelector("[data-menu-close]");

  if (!toggle || !overlay || !panel || !closeButton) return;

  const openMenu = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    closeButton.focus();
  };

  const closeMenu = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    toggle.focus();
  };

  toggle.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  overlay.addEventListener("click", (event) => {
    if (!panel.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
})();
