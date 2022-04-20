//ADD YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyC0yDH0-16JN2AvcvLes5R8ZXWhSoaFfq8", authDomain: "kwitter-13621.firebaseapp.com", databaseURL: "https://kwitter-13621-default-rtdb.firebaseio.com", projectId: "kwitter-13621", storageBucket: "kwitter-13621.appspot.com", messagingSenderId: "423280083957", appId: "1:423280083957:web:45d221b393e5d2712916bc", measurementId: "G-TW206HXJV6" }; firebase.initializeApp(firebaseConfig);


function addUser()
{
    practice = document.getElementById("practice").value;

 firebase.database().ref("/").child(practice).update({
     key : "MY  NAME IS suchir"
 });
}



