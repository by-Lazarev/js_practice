"use strict";

function showWelcomeMessage(userName) {
	return "Hello, " + userName + "!";
}

let userName = prompt("Enter your name:");

if (userName) {
	alert(showWelcomeMessage(userName));
}

