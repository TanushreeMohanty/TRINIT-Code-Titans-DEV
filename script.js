// NAVBAR
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNav');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');
    }
});

// LOGIN/SIGNUP
document.getElementById('toggleSignup').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('toggleLogin').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
});