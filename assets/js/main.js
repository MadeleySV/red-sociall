import './firebase/google.js';
import './firebase/signinModal.js';
import './firebase/firebase.js';
import './firebase/registro.js';


// Agregar un evento al formulario para redirigir después de iniciar sesión
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    // Aquí se verificaría el inicio de sesión y si es exitoso, se redirigiría al usuario
    window.location.href = 'index2.html';
  });

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    // Aquí se verificaría el inicio de sesión y si es exitoso, se redirigiría al usuario
    window.location.href = 'index2.html';
  });

  document.getElementById('google-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    // Aquí se verificaría el inicio de sesión y si es exitoso, se redirigiría al usuario
    window.location.href = 'index2.html';
  });