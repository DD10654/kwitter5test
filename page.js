var firebaseConfig = {
    apiKey: "AIzaSyBg-sChHSIui57dC2tRCMZIsaRBSlDxhiE",
    authDomain: "first-website-1cf23.firebaseapp.com",
    databaseURL: "https://first-website-1cf23-default-rtdb.firebaseio.com",
    projectId: "first-website-1cf23",
    storageBucket: "first-website-1cf23.appspot.com",
    messagingSenderId: "435364783338",
    appId: "1:435364783338:web:4cf55577d58abba4aba393"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room__name = localStorage.getItem("room_name")

function username() {
    username_3 = localStorage.getItem("username");
        document.getElementById('username_logged_in').innerHTML = username_3;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(
    function(childSnapshot) { 
        childKey = childSnapshot.key; childData = childSnapshot.val(); 
        if(childKey != "purpose") { 
            firebase_message_id = childKey; 
            message_data = childData; 
    //Start code 
        console.log(message_data);
        name2 = message_data['name'];
        msg = message_data['msg'];
        like = message_data['like'];

        row = "<h4> "+ name2 + "class='message_h4'>"+ msg +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'> class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
        
        row = "<div class='card-header'></div>" + name_msg_with_tag + like_with_button + dislike_with_button + "</div>";
        document.getElementById("output").innerHTML += row;
    //End code 
} }); }); } 
    
    getData();

    function logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
    function send() {
        msg = document.getElementById("msg_input").value

        firebase.database().ref(room__name).push({
            name:localStorage.getItem("username"),
            msg: msg,
            like:0,

        });
    }

    function updateLike(msg_id) {
        console.log("The Like Button is pressed! The Message Id Is : " + msg_id);
        button_id = msg_id;
        likes = document.getElementById(button_id).value;
        likes_updated = Number(likes) + 1;
        console.log("The updated Likes are " + likes_updated);
    
        firebase.database().ref(room__name).child(msg_id).update({
            like : likes_updated
        });
    }
