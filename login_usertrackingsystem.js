function checkEmail() {
 const email = document.getElementById('email').value;
 


 if (email === '') {
    alert("Enter your email");
    return false;


 }
 const usedEmail = localStorage.getItem("loggedInEmail");


 if (email !== usedEmail) {
    alert("Please use the same email that you signed up with")
    return false; }


    if (email === usedEmail) {
        alert("Thank you for logging in.")
        return true;
    }
 }


function checkPassword(){
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;


if (password1 === '') {
    alert("Enter your password")
    return false;
}

if (password1 !== password2) {
    alert("Password dont match");
    return false;
}

if (password1 === password2) {
    alert("Password matches")
    return true;
}
}