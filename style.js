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
    // document.getElementById("body").style.overflowY = "hidden";
    // document.getElementById("footerid").style.display = "none";
}

function showPage() {
    document.getElementById("footerid").style.display = "block";
    document.getElementById("body").style.overflowY = "Scroll";
    document.getElementById("loadingspinner").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("stars1").style.display = "none";
    document.getElementById("stars2").style.display = "none";
    document.getElementById("stars3").style.display = "none";
}

function playFunction() {
    if ("click") {
        alert("You clicked me, Here is the time!"); 
        alert(Date())
    }
}