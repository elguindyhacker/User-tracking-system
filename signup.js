const users = JSON.parse(localStorage.getItem('users'));

function createAccount(email, password) {
    if (users[email]) {
        console.log("This one used already, Pick a different email.");
        return;
    } else {
        users[email] = {password};
        localStorage.setItem('users', JSON.stringify(users))
        console.log("Account created");
        return true;

    }
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = docuemnt.getElementById('password').value;
createAccount(email, password);
});
