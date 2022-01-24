/****************Preloader *****************/

// Variable del loader
const preloader = document.querySelector(`#loader`);

// Desaparece el preloader cuando el DOM termina de cargarse
window.addEventListener('DOMContentLoaded', () => {
    preloader.classList.toggle(`close-loader`);
});
