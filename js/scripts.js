// Select random "Difficulty" to begin your adventure.
function randomNumber() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("difficulty").innerHTML = x;

}
// Button changes to "Uh-oh!".
function mUp(obj) {
    obj.innerHTML="Uh-Oh!"; 
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
    else if (myrandom==1)
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
    else if (myrandom==1)
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

// Death screen