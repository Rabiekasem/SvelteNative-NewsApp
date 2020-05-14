import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCptbAD0wjXsp4K1eB2FgxlRVgZAn4k8Yk",
    authDomain: "my-first-firestore-proje-9c783.firebaseapp.com",
    databaseURL: "https://my-first-firestore-proje-9c783.firebaseio.com",
    projectId: "my-first-firestore-proje-9c783",
    storageBucket: "my-first-firestore-proje-9c783.appspot.com",
    messagingSenderId: "160669952560",
    appId: "1:160669952560:web:e4878ff937db21bc655bf5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()