const BASE_URL = "http://localhost:8081";

function cadastrar() {
    const errorLabel = document.getElementById("error-label");
    const emailInput = document.getElementById("email-field");
    const nameInput = document.getElementById("name-field");
    const passwordInput = document.getElementById("password-field");

    if (!emailInput.value || !nameInput.value || !passwordInput.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    axios.post(BASE_URL + '/cadastro/cadastro', {
            email: emailInput.value,
            nome: nameInput.value,
            senha: passwordInput.value
        })
        .then(function(response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "../tela-inicial/index.html"
        })
        .catch(function(error) {
            errorLabel.innerText = "Não foi possivel efetuar o cadastro";
        });
}