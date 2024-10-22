function checkEmail() {
    const email = document.getElementById('email').value;

    if (email === '') {
        alert("Enter your email");
        return false;
    }

    const usedEmail = localStorage.getItem("signedUpEmail"); 

    if (email !== usedEmail) {
        alert("Please use the same email that you signed up with");
        return false;
    }

    alert("Thank you for logging in.");
    return true;
}

function checkPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 === '') {
        alert("Enter your password");
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const email = document.getElementById('email').value;

    if (users[email] && users[email].password === password1) {
        alert("Login successful");
        return true;
    } else {
        alert("Email or password is incorrect");
        return false;
    }
}
