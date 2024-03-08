  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDA3ZlOhqB7QkrwAs2LDcF-HObJTx8Pt64",
    authDomain: "red-social-ca186.firebaseapp.com",
    projectId: "red-social-ca186",
    storageBucket: "red-social-ca186.appspot.com",
    messagingSenderId: "605908049776",
    appId: "1:605908049776:web:bdcd2ce0d32429111db9b5",
    measurementId: "G-3LFCZS70L4"
  };
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);


  
  
