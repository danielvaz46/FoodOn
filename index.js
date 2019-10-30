// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYMK--CTh7g7OplDP1PAioYxW7hSfXIw4",
  authDomain: "foodon-48fa1.firebaseapp.com",
  databaseURL: "https://foodon-48fa1.firebaseio.com",
  projectId: "foodon-48fa1",
  storageBucket: "foodon-48fa1.appspot.com",
  messagingSenderId: "767673788574",
  appId: "1:767673788574:web:cb2a9629545d97ff19738f",
  measurementId: "G-S82JRZ7QSN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Sign in
function signIn(){
  alert('Hello');
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    console.log(user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
