const container = document.querySelector('.container');

const registerBtn = document.querySelector('.register-btn');

const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', function () {
    container.classList.add('active');
});

loginBtn.addEventListener('click', function () {
    container.classList.remove('active');
});

function goRegister() {

    const username = document.getElementById("registerUsername").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;

    localStorage.setItem("username", username);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    alert("Registrasi berhasil!");

    container.classList.remove('active');
}

function goLogin() {

    const username = document.getElementById("loginUsername").value;

    const password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem("username");

    const savedPassword = localStorage.getItem("password");

    if (!savedUsername || !savedPassword) {

        alert("Belum punya akun!");

        container.classList.add('active');

        return;
    }

    if (username !== savedUsername) {

        alert("Username belum terdaftar!");

        container.classList.add('active');

        return;
    }

    if (password !== savedPassword) {

    alert("Password salah!");

    return;
}

// berhasil login
localStorage.setItem("isLoggedIn", "true");

localStorage.setItem("loggedInUser", username);

window.location.href = "./index.html";
}
