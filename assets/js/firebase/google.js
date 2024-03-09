import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";

const googleButton = document.getElementById("google-login");

googleButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();

    // Forzar la selección de cuenta
    provider.setCustomParameters({
        prompt: 'select_account',
    });

    try {
        const credentials = await signInWithPopup(auth, provider);
        
        // Ocultar el modal
        const signinModal = document.getElementById('signin-modal');
        signinModal.style.display = 'none';
    
    
    }
    catch (error) {
        console.log(error);
    }

    window.location.href = "index2.html";
});
