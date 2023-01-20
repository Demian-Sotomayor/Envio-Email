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
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else {
            console.log('Si hay algo...');
        }
    }

    function mostrarAlerta(mensaje, referencia) {

        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }

        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'mt-4', 'text-center', 'alerta')

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
    
});