  
    var firebaseConfig = {
    apiKey: "AIzaSyCoKNbMjhs4wMsmJQG6ZaVlxtkuIqupUGI",
    authDomain: "tmcwebinar-1adf9.firebaseapp.com",
    databaseURL: "https://tmcwebinar-1adf9.firebaseio.com",
    projectId: "tmcwebinar-1adf9",
    storageBucket: "tmcwebinar-1adf9.appspot.com",
    messagingSenderId: "649388300261",
    appId: "1:649388300261:web:14c32d2ad3273d521d410c",
    measurementId: "G-RY3SW61NJP"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //created new reference
    var messagesRef = firebase.database().ref("messages");
    document.getElementById("contactform").addEventListener("submit",submitform);

  function submitform(e){
        e.preventDefault();
        var username = document.getElementById("username").value;
        var usermobile = document.getElementById("usermobile").value;
        var useremail = document.getElementById("useremail").value;
        var userquery = document.getElementById("userquery").value;
        //saves data
        saveMessage(username,usermobile,useremail,userquery);
        //Display alert
        document.querySelector('.alert').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);
        //clear form
        document.getElementById("contactform").reset();
  }
  

  function saveMessage(name, mobile, email, query){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
        name : name,
        mobile:mobile,
        email:email,
        query:query
    });
  }

