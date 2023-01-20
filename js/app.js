document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

   
/* ————————————————————— Seleccionar los elementos de la interfaz ————————————————————— */

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');

/* ———————————————————————————————— Asignar eventos ———————————————————————————————————— */

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {

        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            return;
        };

        limpiarAlerta(e.target.parentElement);

/* —————————————————————————————— Asignar los valores —————————————————————————————————— */

        email[e.target.id] = e.target.value.trim().toLowerCase();

        // Comprobar email
        comprobarEmail();

    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

/* ————————————————————————————— Generar alerta en HTML ———————————————————————————————— */

        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'mt-4', 'text-center', 'alerta')

/* ————————————————————————— Inyectar el error al formulario ——————————————————————————— */

        referencia.appendChild(error);
    }

        // Comprueba si ya existe una alerta
        function limpiarAlerta(referencia) {
            const alerta = referencia.querySelector('.alerta');
         if(alerta){
            alerta.remove();
        }
    }
    
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        console.log(Object.values(email).includes(''));
    }


});