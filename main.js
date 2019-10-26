

// detecting screen size

let screenWidth = window.screenX;
let screenHeight = window.screenY;
// Checking if will render correctly

if (screenWidth > 396){
  window.location.href = "screenissue.html";
};



// issues or inquires
function contactUs(){
  window.open('mailto:help.squar@gmail.com');
};


// opening settings

function settingsBarOpen(){
  document.getElementById('sidebar').style.display = "none";
};

function backToMain(){
  document.getElementById('sidebar').style.display = "block";
};


let mainColor = document.getElementById("mainSec").style.background;
function darkModeAct(){
  alert(mainColor);

};