let buttonCountPlus = document.getElementsByClassName("cartcout");
let count = document.getElementById("hfig");
let number = 0;

function gug(sw) {
    var pic;
    if (sw == 0) {
        number++;
        count.innerHTML = number;
    } else if (sw == 1) {
        number++;
        count.innerHTML = number;
    } else {
        number++;
        count.innerHTML = number;
    }
}

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}