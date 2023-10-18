var navBar = document.getElementById("nav-id"); /*Get element by their ID*/
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

/*Function for showing/hiding menu*/
function showNav() {
    if (navBar.style.display === "none" || navBar.style.display === "") { /*If navBar == none OR|| empty string then open nav, else close.*/
        navBar.style.display = "block";
    } 
    else {
        navBar.style.display = "none";
    }
}

/*Function for home-button*/
function refreshPage() {
    location.reload();
}

/*Close function*/
function closeForms() {
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
    }
    else if (registerForm.style.display === "block") {
        registerForm.style.display = "none";
    }
}

/*Function for showing login/register forms*/
function showRegister() {
    if (registerForm.style.display === "none" || registerForm.style.display === "") {
        // Open the register form
        registerForm.style.display = "block";
    
        // Close the login form if it's open
        if (loginForm.style.display === "block") {
            loginForm.style.display = "none";
        }
    } else {
        // Close the register form
        registerForm.style.display = "none";
    }
}
    
function showLogin() {
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        // Open the login form
        loginForm.style.display = "block";
    
        // Close the register form if it's open
        if (registerForm.style.display === "block") {
            registerForm.style.display = "none";
        }
    } else {
        // Close the login form
        loginForm.style.display = "none";
    }
}
