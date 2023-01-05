var nameInput = document.querySelector('#username');
var submmitButton = document.querySelector('#submmit');
var userNameSpan = document.querySelector('#user-name');
var scoreSpan = document.querySelector('#userscore');
var msgDiv = document.querySelector("#msg");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var name = localStorage.getItem("name");

  if (!name) {
    return;
  }

  userNameSpan.textContent = name;
}

submmitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#username").value;

  if (name === "") {
    displayMessage("error", "Name cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("name", name);
    renderLastRegistered();
  }
});