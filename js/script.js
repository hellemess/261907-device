var btn = document.querySelector(".write-us-btn");
var popup = document.querySelector(".write-us");
var exit = popup.querySelector(".exit");
var nameField = popup.querySelector("#name-field");
var form = popup.querySelector("form");
var eMailField = popup.querySelector("#e-mail-field");
var letterField = popup.querySelector("#letter-field");
var nameStorage = localStorage.getItem("nameField");
var eMailStorage = localStorage.getItem("eMailField");
var map = document.querySelector(".map img");
var mapPopup = document.querySelector(".map-popup");
var mapExit = mapPopup.querySelector(".exit");

btn.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("write-us-show");
  nameField.focus();

  if (nameStorage) {
    nameField.value = nameStorage;
    eMailField.focus();

    if (eMailStorage) {
      eMailField.value = eMailStorage;
      letterField.focus();
    } else {
      eMailField.focus();
    }
  } else {
      nameField.focus();
  }
});

exit.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error");
});

form.addEventListener("submit", function(event){
  if (!nameField.value || !eMailField.value || !letterField.value) {
    event.preventDefault();
    popup.classList.add("write-us-error");
  } else {
    localStorage.setItem("nameField", nameField.value);
    localStorage.setItem("eMailField", eMailField.value);
  }
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    } else {
      if (mapPopup.classList.contains("map-popup-show")) {
        mapPopup.classList.remove("map-popup-show");
      }
    }
  }
});

map.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

mapExit.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});
