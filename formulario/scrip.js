document.getElementById('contacform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validación de campos
    var nombre = document.getElementById('nombre').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    var asunto = document.getElementById('asunto').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var consentimiento = document.querySelector('input[name="consentimiento"]').checked;

    if (nombre === '' || telefono === '' || email === '' || !consentimiento) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }


    // Mostrar mensaje de envio
    var formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'block';

    // Reinicio de formukario
    document.getElementById('contacform').reset();

    // Tiempo de ocultar el mensaje
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 3000);
});
