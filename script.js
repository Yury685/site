// script.js

document.addEventListener('DOMContentLoaded', function () {
    showTab('cr7'); // Mostrar Cristiano Ronaldo por padrão ao carregar a página
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}
