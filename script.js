document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Crear un script para validar el formulario:El script deberá comprobar que el nombre de usuario tiene al menos 4 caracteres
        if (username.length < 4) {
            alert("El nombre de usuario debe tener al menos 4 caracteres.");
            return;
        }

        // El script deberá comprobar que el correo electrónico introducido es válido. Para ello haremos uso de una expresión regular que se os facilita a continuación: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        const emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailPattern.test(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        // El script deberá comprobar que la contraseña introducida tiene entre 6 y 12 caracteres.
        if (password.length < 6 || password.length > 12) {
            alert("La contraseña debe tener entre 6 y 12 caracteres.");
            return;
        }

        // Y finalmente se deberá comprobar que ambas contraseñas coinciden. El programa deberá lanzar un mensaje de alerta para cada campo en el caso de que no se cumplan los requisitos.
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Si todas las validaciones pasan, puedes enviar el formulario aquí
        alert("¡Formulario enviado con éxito!");
    });
});
