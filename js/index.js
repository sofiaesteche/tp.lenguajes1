// BOTON MODO OSCURO
const btnModoOscuro = document.getElementById("btn-modo-oscuro");

btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        btnModoOscuro.textContent = "Modo claro";
    } else {
        btnModoOscuro.textContent = "Modo oscuro";
    }
});