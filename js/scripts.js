// Select random "Difficulty" to begin your adventure.
function randomNumber() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("difficulty").innerHTML = x;
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

// Julie's adventure

// Death screen