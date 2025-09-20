let hamburguesa = document.querySelector('.hamburguesa');
let menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let titulo = document.getElementById("titulo");
let texto = `Hola, soy Celia, <br> desarrolladora web en formación.`;
let i = 0;

let cursor = document.createElement("span");
cursor.classList.add("cursor");

titulo.innerHTML = "";
titulo.appendChild(cursor);

function typing() {
  if (i <= texto.length) {
    titulo.innerHTML = texto.substring(0, i);
    titulo.appendChild(cursor);
    i++;
    setTimeout(typing, 80);
  } else {
    titulo.innerHTML = texto; 
  }
}

window.onload = typing