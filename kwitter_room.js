
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC1LwHZznAmD-v6hQyJrgjJgQmP0hDXMeg",
      authDomain: "kwitterapp2-a513f.firebaseapp.com",
      databaseURL: "https://kwitterapp2-a513f-default-rtdb.firebaseio.com",
      projectId: "kwitterapp2-a513f",
      storageBucket: "kwitterapp2-a513f.appspot.com",
      messagingSenderId: "735257344373",
      appId: "1:735257344373:web:587cc64ff990113e7e3b3c",
      measurementId: "G-JZ9WC7QV7D"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom()

{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location  = "kwitter_page_html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
