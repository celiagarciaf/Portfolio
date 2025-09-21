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


let form = document.querySelector(".contact-form");
let status = document.getElementById("form-reply");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = new FormData(form);
  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.innerHTML = "Tu mensaje ha sido enviado con éxito. ✅";
      form.reset();
    } else {
      status.innerHTML = "Hubo un error al enviar. Inténtalo de nuevo. ❌ ";
    }
  } catch (error) {
    status.innerHTML = "Error de conexión. ⚠️ ";
  }
});