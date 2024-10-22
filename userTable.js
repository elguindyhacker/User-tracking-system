const users = JSON.parse(localStorage.getItem('users')) || {};
const userTableBody = document.querySelector('#usertable tbody');

function loadUser() {
    userTableBody.innerHTML = '';

    for (const email in users){
        const user = users[email];
        const row = document.createElement('tr');

        const age = calculateAge(user.birthday);
const validity = user.valid ? 'Validity' : 'Invalidity';



row.innerHTML = 
`
            <td>${email}</td>
            <td class="validity" onclick="toggleValidity('${email}')">${validity}</td>
            <td>${age}</td>
            <td><button class="delete-btn" onclick="deleteUser('${email}')">Delete</td>
        `;
        tbody.appendChild(row);

    }

}

function deleteUser(email) {
    if (confirm(`are you sure you wantto delete ${email}?`)) {
        delete users[email];
        localStorage.setItem('users', JSON.stringify(users));
        loadUser();
    }
}

function toggleValidity(email) {
users[email].valid = !users[email].valid;
localStorage.setItem('users', JSON.stringify(users));
loadUser();
}

function calculateAge(birthday) {
const birthDate = new Date(birthday);
const ageDiffernece = Date.now() - birthDate.getTime();
const ageDate = new Date(ageDiffernece);
let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();


}

document.querySelector('#signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthday = document.getElementById('birthday').value;

  createUser(email, password, birthday);
});


loadUser();