import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACqs4ejb8qerhEhfR1PEaXx7JEnUWNiVI",
    authDomain: "tesla-clone-8d64e.firebaseapp.com",
    projectId: "tesla-clone-8d64e",
    storageBucket: "tesla-clone-8d64e.appspot.com",
    messagingSenderId: "1025500248780",
    appId: "1:1025500248780:web:cfc693a58980be87a9e069"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  export {auth}