const BASE_URL = "http://localhost:8081";

function apagarConta() {

    const errorLabel = document.getElementById("error-label");
    const emailInput = document.getElementById("email-field");
    const senhaInput = document.getElementById("senha-field");

    if (!emailInput.value || !senhaInput.value) {
        alert("Preencha todos os campos orbrigatorios");
        return;
    }

    axios.post(BASE_URL + '/apagar', {
            email: emailInput.value,
            senha: senhaInput.value,

        })
        .then(function(response) {
            window.localStorage.setItem('Contato apagado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/tela-inicial-publico/index.html";
        })
        .catch(function(error) {
            errorLabel.innerText = "Usuario e senha incorretos";
        });

}