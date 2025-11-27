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

function signUp() {
	alert("Signing up...");
}

function signUpGoogle() {
	alert("Signing up with Google credentials...");
}

function privacyPolicy() {
	alert("Opening privacy policy page...");
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
