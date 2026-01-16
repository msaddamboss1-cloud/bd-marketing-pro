// ফায়ারবেস কনফিগারেশন - সাদ্দাম ভাইয়ের প্রজেক্ট
const firebaseConfig = {
  apiKey: "AIzaSyAs-pU5T5W2E9Y0X-7R6Q5P4O3N2M1L0", 
  authDomain: "bd-marketing-1.firebaseapp.com",
  projectId: "bd-marketing-1",
  storageBucket: "bd-marketing-1.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// ফায়ারবেস ইনিশিয়ালাইজ
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
