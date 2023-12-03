const darkMode = document.getElementById("darkBtn");
const lightMode = document.getElementById("lightBtn");

darkMode.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = "#29001B";
  document.body.style.color = "#D6FFE4";
  darkMode.style.backgroundColor = "#29001B";
  darkMode.style.borderColor = "#D6FFE4";
  lightMode.style.borderColor = "#D6FFE4";
  darkMode.style.color = "#D6FFE4";
});

lightMode.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = "#D6FFE4";
  document.body.style.color = "#29001B";
  lightMode.style.borderColor = "#29001B";
});