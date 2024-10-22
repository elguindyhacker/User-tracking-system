const users = JSON.parse(localStorage.getItem('users'));

function createAccount(email, password) {
    if (users[email]) {
        console.log("This one used already, Pick a different email.");
        alert("This one used already, Pick a different email.");
    } else {
        users[email] = {password};
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem("signedUpEmail", email);
        console.log("Account created");
        alert("Account created");
    }
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
createAccount(email, password);
});
