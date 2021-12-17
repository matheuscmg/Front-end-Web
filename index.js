document.addEventListener("DOMContentLoaded", function(){
    let loginButton = document.getElementById('login-btt');
    let isLoggedIn = window.localStorage.getItem('logado');
    
    if(isLoggedIn){
        loginButton.innerText = 'Logout';
    }else{
        loginButton.innerText = 'Login';
    }
});

function logout(){
    window.localStorage.setItem('logado', 'false');
    window.location.href = "/tela-login/index.html";
}