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
        dislike = message_data['dislike'];
        name_msg_with_tag = "<h4>" + msg +  "<h4>Example heading <span class='badge badge-success'>" + name2 + "</span></h4>";
        like_with_button = "<div class='btn btn-warning'> <button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'></button";
        dislike_with_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + dislike + "' onclick='updateDislike(this.id)'><button></div>";
        
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
        firebase.database().ref(localStorage.getItem("room_name")).push({
            name:localStorage.getItem("username"),
            msg: msg,
            like:0,
            dislike:0
        });
    }

    function updateLike(msg_id) {
        console.log("The Like Button is pressed! The Message Id Is : " + msg_id);
        button_id = msg_id;
        likes = document.getElementById(button_id).value;
        likes_updated = Number(likes) + 1;
        console.log("The updated Likes are " + likes_updated);
    
        firebase.database().ref(localStorage.getItem("room_name")).child(msg_id).update({
            like : likes_updated
        });
    }

    function updateLike(msg_id) {
        console.log("The Dislike Button is pressed! The Message Id Is : " + msg_id);
        button_id = msg_id;
        dislikes = document.getElementById(button_id).value;
        dislikes_updated = Number(likes) + 1;
        console.log("The updated Likes are " + likes_updated);
    
        firebase.database().ref(localStorage.getItem("room_name")).child(msg_id).update({
            dislike : dislikes_updated
        });
    }