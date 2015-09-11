function tryIt() {
	if(document.getElementById("the-button").innerHTML == "Try It") {
		document.getElementById("the-text").innerHTML = "Paragraph Changed"
		document.getElementById("the-button").innerHTML = "Put it back"
	}
	else {
		document.getElementById("the-text").innerHTML = "Welcome to Javascript"
		document.getElementById("the-button").innerHTML = "Try It"
	}
}

function sayWeather() {
	var temp = "72 degrees"
	alert("Its " + temp)
}

function sayWeather2(fuctionName) {
	var temp = fuctionName()
	alert("Its " + temp)
}

function takeTemp() {
	console.log("You made it to the takeTemp function!")
	return "60 degrees"
}

function helloGoodbye() {
	if(document.getElementById("helloGoodbye").innerHTML == "Goodbye, All!") {
		alert("Goodbye, All!");
		document.getElementById("all-buttons").innerHTML = "butons are gone"
	}
	else {
		alert("Warnings, do NOT CLICK goodbye!")
		document.getElementById("helloGoodbye").innerHTML = "Goodbye, All!"
	}
}

function displayName() {
		document.getElementById("my-name").innerHTML = "Andrew Lichtenhan"

}