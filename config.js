const firebaseConfig = {
    apiKey: "আপনার_API_KEY",
    authDomain: "আপনার_PROJECT.firebaseapp.com",
    projectId: "আপনার_PROJECT_ID",
    storageBucket: "আপনার_PROJECT.appspot.com",
    messagingSenderId: "আপনার_ID",
    appId: "আপনার_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
