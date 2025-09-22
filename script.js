let hamburguesa = document.querySelector('.hamburguesa');
let menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let titulo = document.getElementById("titulo");
let texto = ["Hola, soy Celia,", "desarrolladora web en formación."]; // cada fragmento será un bloque
let i = 0;
let j = 0;

let cursor = document.createElement("span");
cursor.classList.add("cursor");
titulo.innerHTML = "";
titulo.appendChild(cursor);

function typing() {
    if (i < texto.length) {
        let currentText = texto[i];
        if (j <= currentText.length) {
            titulo.innerHTML = texto.slice(0, i).join("<br>") + "<br>" + currentText.substring(0, j);
            titulo.appendChild(cursor);
            j++;
            setTimeout(typing, 80);
        } else {
            j = 0;
            i++;
            setTimeout(typing, 80);
        }
    }
}

window.onload = typing;



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