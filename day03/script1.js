"use strict";

function showWelcomeMessage(userName) {
	alert( "Hello, " + userName + "!");
}

function checkName(userName, yes, no) {
	if (userName) {
		yes(userName)
	}	else {
		no()
	}
}

let userName = prompt("Enter your name:");

checkName(userName, showWelcomeMessage, function () {alert("There are no name!")})
