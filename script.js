let hamburguesa = document.querySelector('.hamburguesa');
let menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});
