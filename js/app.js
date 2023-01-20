document.addEventListener('DOMContentLoaded', function() {
   
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta();
        } else {
            console.log('Si hay algo...');
        }
    }

    function mostrarAlerta() {

        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = 'Todos los campos son obligatorios';
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'mt-4', 'text-center')

        // Inyectar el error al formulario
        formulario.appendChild(error);
    }
    
});