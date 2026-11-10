// Validación del formulario de contacto
const form = document.getElementById("form-contacto");
const mensajeForm = document.getElementById("mensaje-form");

const campos = {
  nombre: document.getElementById("nombre"),
  email: document.getElementById("email"),
  asunto: document.getElementById("asunto"),
  mensaje: document.getElementById("mensaje")
};

const emailValido = (email) => email.includes("@") && email.length > 3;

const marcar = (campo, esValido) => {
  campo.classList.toggle("is-invalid", !esValido);
  campo.classList.toggle("is-valid", esValido);
};

const mostrarMensaje = (texto, tipo) => {
  // tipo: "success" (verde) o "danger" (rojo)
  mensajeForm.innerHTML = `<div class="alert alert-${tipo}">${texto}</div>`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que la página recargue

  const nombreOk = campos.nombre.value.trim() !== "";
  const emailOk = emailValido(campos.email.value.trim());
  const asuntoOk = campos.asunto.value !== "";
  const mensajeOk = campos.mensaje.value.trim() !== "";

  marcar(campos.nombre, nombreOk);
  marcar(campos.email, emailOk);
  marcar(campos.asunto, asuntoOk);
  marcar(campos.mensaje, mensajeOk);

  if (nombreOk && emailOk && asuntoOk && mensajeOk) {
    mostrarMensaje(`¡Gracias, ${campos.nombre.value.trim()}! Recibimos tu consulta y te responderemos pronto.`, "success");
    form.reset();
    Object.values(campos).forEach((c) => c.classList.remove("is-valid", "is-invalid"));
  } else {
    mostrarMensaje("Revisá los campos marcados en rojo antes de enviar.", "danger");
  }
});