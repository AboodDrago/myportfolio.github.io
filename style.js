var typed = new Typed(".multiple-text", {
    strings: ["Medical Student", "Frontend Developer", "Web Developer", "YouTuber"],
    typeSpeed: 90,
    backSpeed: 100,
    startDelay: 1800,
    backDelay: 1000,
    loop: true,
})

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loadingspinner").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

// var canvas = document.getElementById("starfield"),
// context = canvas.getContext("2d"),
// stars = 550;

// for (var i = 0; i < stars; i++) {
//     var x = Math.random() * canvas.offsetWidth;
//     y = Math.random() * canvas.offsetHeight,
//     radius = Math.random() * 1.2;
//     context.beginPath();
//     context.arc(x, y, radius, 0, 360);
//     context.fillStyle = "white";
//     context.fill();
// }

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}           
var canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 500,
    colorrange = [0,60,240];

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight,
    radius = Math.random() * 1.2,
    hue = colorrange[getRandom(0,colorrange.length - 1)],
    sat = getRandom(50,100);
    context.beginPath();
    context.arc(x, y, radius, 0, 360);
    context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
    context.fill();
}
