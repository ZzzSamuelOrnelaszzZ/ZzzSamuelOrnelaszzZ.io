document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const dataForm = document.getElementById('dataForm');
    const newOrderButton = document.getElementById('newOrderButton');
    const takeAnotherOrderButton = document.getElementById('takeAnotherOrderButton');

    // Maneja el envío del formulario de inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'data-entry.html';
        });
    }

    // Maneja el envío del formulario de datos
    if (dataForm) {
        dataForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'confirmation.html';
        });
    }

    // Maneja el clic en el botón para tomar otra orden
    if (newOrderButton) {
        newOrderButton.addEventListener('click', () => {
            window.location.href = 'data-entry.html';
        });
    }

    // Maneja el clic en el nuevo botón para tomar otra orden
    if (takeAnotherOrderButton) {
        takeAnotherOrderButton.addEventListener('click', () => {
            window.location.href = 'confirmation.html';
        });
    }
});
