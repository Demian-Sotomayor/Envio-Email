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
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#resetBtn');
    const spinner = document.querySelector('#spinner');

/* ———————————————————————————————— Asignar eventos ———————————————————————————————————— */

    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);
    
    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

/* ———————————————————————————————  reiniciar el objeto ———————————————————————————————— */
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    })

    function enviarEmail(e) {
        e.preventDefault()

        spinner.classList.add('flex')
        spinner.classList.remove('hidden')
        
        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')

            resetForm();

            // Crear una alerta
            const mensajeEnviado = document.createElement('p');
            mensajeEnviado.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            mensajeEnviado.textContent = 'Mensaje enviado correctamente';
            
            formulario.appendChild(mensajeEnviado);
            
            setTimeout(() => {
                mensajeEnviado.remove();
            }, 3000);

        }, 3000);
    }

    function validar(e) {

        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
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
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
            return
        } 
        
        btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    function resetForm() {
        // Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
    
        formulario.reset();
        comprobarEmail();
    }


});