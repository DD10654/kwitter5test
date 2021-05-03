function addUser() {
    username_ = document.getElementById('username').value;
    localStorage.setItem("username", username_);
    window.location = "room.html";
}