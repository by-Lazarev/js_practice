"use strict";

function checkName(userName, yes, no) {
	if (userName) {
		yes(userName)
	}	else {
		no()
	}
}

let showWelcomeMessage = (userName) => alert( "Hello, " + userName + "!");

let userName = prompt("Enter your name:");

checkName(userName, showWelcomeMessage, () => alert("There are no name!"))
