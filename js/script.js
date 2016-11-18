var btn = document.querySelector(".write-us-btn");
var popup = document.querySelector(".write-us");
var exit = popup.querySelector(".exit");
var nameField = popup.querySelector("#name-field");
var form = popup.querySelector("form");
var eMailField = popup.querySelector("#e-mail-field");
var letterField = popup.querySelector("#letter-field");
var nameStorage = localStorage.getItem("nameField");
var eMailStorage = localStorage.getItem("eMailField");
var map = document.querySelector(".map");
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
  nameField.classList.remove("invalid");
  eMailField.classList.remove("invalid");
  letterField.classList.remove("invalid");
});

form.addEventListener("submit", function(event){
  if (!nameField.value || !eMailField.value || !letterField.value) {
    event.preventDefault();
    popup.classList.remove("write-us-error");
    nameField.classList.remove("invalid");
    eMailField.classList.remove("invalid");
    letterField.classList.remove("invalid");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");
    if (!nameField.value) {
      nameField.classList.add("invalid");
    }
    if (!eMailField.value) {
      eMailField.classList.add("invalid");
    }
    if (!letterField.value) {
      letterField.classList.add("invalid");
    }
  } else {
    localStorage.setItem("nameField", nameField.value);
    localStorage.setItem("eMailField", eMailField.value);
  }
});

nameField.addEventListener("focus", function(event){
  nameField.classList.remove("invalid");
});

eMailField.addEventListener("focus", function(event){
  eMailField.classList.remove("invalid");
});

letterField.addEventListener("focus", function(event){
  letterField.classList.remove("invalid");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
      nameField.classList.remove("invalid");
      eMailField.classList.remove("invalid");
      letterField.classList.remove("invalid");
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
