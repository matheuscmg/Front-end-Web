const BASE_URL = "http://localhost:8081";

function alterarSenha() {

    const errorLabel = document.getElementById("error-label");
    const emailInput = document.getElementById("email-field");
    const senhaAntigaInput = document.getElementById("senha-field");
    const senhaNovaInput = document.getElementById("password-field");

    if (senhaAntigaInput.value == senhaNovaInput.value)
        alert("Senhas inválidas");

    if (!emailInput.value || !senhaAntigaInput.value || !senhaNovaInput.value) {
        alert("Preencha todos os campos orbrigatorios");
        return;
    }

    axios.post(BASE_URL + '/ajustes', {
            email: emailInput.value,
            senhaantiga: senhaAntigaInput.value,
            senha: senhaNovaInput.value,

        })
        .then(function(response) {
            window.localStorage.setItem('Senha Alterada', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/tela-inicial/index.html";
        })
        .catch(function(error) {
            errorLabel.innerText = "Usuario e senha incorretos";
        });
}