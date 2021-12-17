const BASE_URL = "http://localhost:8081";

function login() {
    const errorLabel = document.getElementById("error-label");
    const emailInput = document.getElementById("email-field");
    const passwordInput = document.getElementById("password-field");


    if (!emailInput.value || !passwordInput.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    axios.post(BASE_URL + '/cadastro/login', {
            email: emailInput.value,
            senha: passwordInput.value
        })
        .then(function(response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/tela-inicial/index.html";
        })
        .catch(function(error) {
            errorLabel.innerText = "Usuario e senha incorretos";
        });
}