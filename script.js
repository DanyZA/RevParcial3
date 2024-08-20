// Event listener para cambiar el texto
document.getElementById('changeText').addEventListener('click', function() {
    document.getElementById('message').innerText = '¡El texto ha cambiado!';
});

// Autenticación básica de usuario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Obtener valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Autenticación simple (ejemplo)
    if (username === 'usuario' && password === '1234') {
        alert('Autenticación exitosa');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

