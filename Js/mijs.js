const formularioGeneral = document.getElementById("formulario");

function mostrarSegundaVista() {
  if (!formularioGeneral.reportValidity()) return;

  const formulario = document.getElementById("formulario1");
  formulario.style.display = "none";
  const formulario2 = document.getElementById("formulario2");
  formulario2.style.display = "block";
  const bolita2 = document.getElementById("bolita2");
  bolita2.classList.add("bolita-seleccionada");

  const bolita1 = document.getElementById("bolita1");
  bolita1.classList.remove("bolita-seleccionada");
}

function mostrarTerceraVista() {
  const formulario2 = document.getElementById("formulario2");
  formulario2.style.display = "none";

  const formulario3 = document.getElementById("formulario-vista-3");
  formulario3.style.display = "block";
  const bolita2 = document.getElementById("bolita2");
  bolita2.classList.remove("bolita-seleccionada");
  const bolita3 = document.getElementById("bolita3");
  bolita3.classList.add("bolita-seleccionada");

  const primerNombre = document.getElementById("nombre");
  const segundoNombre = document.getElementById("resultado-nombre");
  segundoNombre.innerText = primerNombre.value;
  const primerEmail = document.getElementById("email");
  const segundoEmail = document.getElementById("resultado-email");
  segundoEmail.innerText = primerEmail.value;
}

function enviarFormulario(e) {
  e.preventDefault();
}

function addSelectClass(button) {
  button.classList.toggle("selected");
}
