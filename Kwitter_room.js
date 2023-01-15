user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

var firebaseConfig = {
    apiKey: "AIzaSyCPMOy26hHDHslNcKZAaQ3wfa-wFZrdPXo",
    authDomain: "kwitter-3ab26.firebaseapp.com",
    databaseURL: "https://kwitter-3ab26-default-rtdb.firebaseio.com",
    projectId: "kwitter-3ab26",
    storageBucket: "kwitter-3ab26.appspot.com",
    messagingSenderId: "793333000993",
    appId: "1:793333000993:web:3c836414e1f0f209d6ac60"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  