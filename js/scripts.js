// Select random "Difficulty" to begin your adventure.
function randomNumber() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("difficulty").innerHTML = x;

}
// Button changes to "Uh-oh!".
function mUp(obj) {
    obj.innerHTML="Uh-Oh!"; 
}

// Main.html button appears after difficulty is clicked.
function showDiv() {
   document.getElementById('button').style.display = "block";
}

// Select your character
function randomCharacter() {
	var myrandom=Math.round(Math.random() * 1)
	var link1 = "zeke0.html"
	var link2 = "julie0.html"

	if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
}

// Zeke's adventure
function randomZeke1() {
    var myrandom=Math.round(Math.random() * 1)
    var link1 = "zeke1.html"
    var link2 = "zeke2.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
}

function randomZeke2() {
    var myrandom=Math.round(Math.random() * 2)
    var link1 = "zeke3.html"
    var link2 = "zeke4.html"
    var link3 = "zeke_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

function randomZeke3() {
    var myrandom=Math.round(Math.random() * 2)
    var link1 = "zeke5.html"
    var link2 = "zeke6.html"
    var link3 = "zeke_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

function randomZeke4() {
    var myrandom=Math.round(Math.random() * 1)
    var link1 = "zeke_end.html"
    var link2 = "zeke_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
}

// Julie's adventure
function randomJulie1() {
    var myrandom=Math.round(Math.random() * 1)
    var link1 = "julie1.html"
    var link2 = "julie2.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
}

function randomJulie2() {
    var myrandom=Math.round(Math.random() * 2)
    var link1 = "julie3.html"
    var link2 = "julie4.html"
    var link3 = "julie_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

function randomJulie3() {
    var myrandom=Math.round(Math.random() * 2)
    var link1 = "julie5.html"
    var link2 = "julie6.html"
    var link3 = "julie_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

function randomJulie4() {
    var myrandom=Math.round(Math.random() * 1)
    var link1 = "julie_end.html"
    var link2 = "julie_dead.html"

    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
}

// Manual lightbox
//open
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

//close
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex= 1;
showSlides (slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




