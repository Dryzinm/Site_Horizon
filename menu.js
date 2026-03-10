const botao = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

botao.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});