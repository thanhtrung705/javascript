//Sua form
document.forms["login-form"].elements["submit"].style="height: 35px; width: 80px; margin-right:3px;";
document.forms["login-form"].elements["reset"].style="height: 35px; width: 80px;";
var div = document.getElementsByTagName("div");
div[9].style="margin-right: 430px;";
//Validate form
var isValidUserName = false;
var isValidPassword = false;
var isValidDuplicatePSW = false;
var isValidCheckBox = false;
var usernameInput = document.forms["login-form"].elements["username"];
var passwordInput = document.forms["login-form"].elements["password"];
var repasswordInput = document.forms["login-form"].elements["re-password"];
var emailInput = document.forms["login-form"].elements["email"];
var checkedbox = document.forms["login-form"].elements["checkbox123"];
var btnLogin = document.forms["login-form"].elements["submit"];

if(!checkedbox.checked){
	isValidCheckBox = false;
}
else{
	isValidCheckBox = true;
}

usernameInput.onkeyup = function(){
	CheckIsValidUsername();
}

passwordInput.onkeyup = function(){
	CheckIsValidPassword();
}

repasswordInput.onkeyup = function(){
	CheckIsDuplicatePassword();
}

btnLogin.onclick = function(){
	return isValidPassword && isValidUserName && isValidDuplicatePSW && isValidCheckBox;
}

function CheckIsValidUsername() {
	var spanmsgUS = usernameInput.nextElementSibling;
	if(usernameInput.value.length < 8){
		spanmsgUS.classList = "error-msg";
		spanmsgUS.innerHTML = "*Có ít nhất 8 kí tự.";
		isValidUserName = false;
	}
	else{
		spanmsgUS.classList = "success-msg";
		spanmsgUS.innerHTML = "Ok.";
		isValidUserName = true;	
	}
}

function CheckIsValidPassword() {
	var spanmsgPW = passwordInput.nextElementSibling;
	if(passwordInput.value.length < 8){
		spanmsgPW.classList = "error-msg";
		spanmsgPW.innerHTML = "Có ít nhất 8 kí tự";
		isValidPassword = false;
	}
	else{
		spanmsgPW.classList = "success-msg";
		spanmsgPW.innerHTML = "Ok";
		isValidPassword = true;	
	}
}

function CheckIsDuplicatePassword() {
	var spanmsgRPW = repasswordInput.nextElementSibling;
	if(repasswordInput.value != passwordInput.value){
		spanmsgRPW.classList = "error-msg";
		spanmsgRPW.innerHTML = "Không trùng nhau";
		isValidDuplicatePSW = false;
	}
	else{
		spanmsgRPW.classList = "success-msg";
		spanmsgRPW.innerHTML = "Ok";
		isValidDuplicatePSW = true;	
	}
}




