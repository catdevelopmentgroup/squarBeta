//outputing names and information

document.getElementById("title").innerHTML = episodeName + " | " + showName;
document.getElementById("desplayTitle").innerHTML = episodeName;
document.getElementById("desplayShow").innerHTML = showName;

//Functions
var player = document.getElementById("player");




//Play and Pause
function play(){
    player.play();
};

function pause(){
    player.pause();
};

//Volume
//creating a varable for the amount of volume being used
let vol = 0.8;
player.volume = vol;

function volUp(){
    vol = vol + 0.1;
    check();
    player.volume = vol;
};

function volDown(){
    vol = vol - 0.1;
    check();
    player.volume = vol;
};

function check(){
    if (vol > 1.0){
        vol = 1.0;
    };

    if (vol < 0.0){
        vol = 0.0;
    };
};


//fullScreen

function fullScreen(){
    player.className = "videoPlayerFullscreen";
    
};


//checking the size of your window

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

if (windowHeight < 370){
    window.location.href = "sizeError.html";
};

if (windowWidth < 480){
    window.location.href = "sizeError.html";
};

//exiting

function exit(){
    window.location.href = "ep.html";
};
