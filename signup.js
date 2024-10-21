let users = JSON.parse(localStorage.getItem('users')) || {};
console.log(users);

document.querySelector('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        createAccount(email, password);
    });

function createAccount(email, password) {
    if (users[email]) {
        console.log("This one used already, Pick a different email.");
        alert("This email is already used, Pick a different email.");
    } else {
        users[email] = {password};
        localStorage.setItem('users', JSON.stringify(users))
        console.log(users);
        console.log("Account created");
        alert("Account created");
    }
}