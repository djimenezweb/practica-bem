const menuElement = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu__link");

menuElement.addEventListener("click", (ev) => {

  if (ev.target.classList.contains("menu__link")) {
    menuLinks.forEach((menuLink) => {
      // Quitar la clase del menu activo
      menuLink.classList.remove('menu__link--active');
    });

    //Añadir clase de menu activo
    ev.target.classList.add('menu__link--active');
  }
});