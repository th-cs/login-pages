// Button action

function signIn() {
	alert("Signing in...");
}

function signInGoogle() {
	alert("Signing in with Google credentials...");
}

function passwordRecovery() {
	alert("You will receive an email to recover your password!");
}

// Toggle password visibility

let input = document.getElementById("password-input");
function togglePassword() {
	if(input.type == "password") {
		input.type = "text";
	} else {
		input.type = "password";
	}
}
