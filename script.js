// script.js

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const novaTarefaBtn = document.getElementById("nova-tarefa");

    // Abre a modal
    novaTarefaBtn.addEventListener("click", function () {
        overlay.classList.add("active");
    });

    // Fecha a modal quando clica fora dela
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("active");
        }
    });
});
