var clientes = document.querySelectorAll(".cliente");

var tabela = document.querySelector("#tabela-clientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});