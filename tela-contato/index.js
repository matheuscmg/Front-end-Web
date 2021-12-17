const BASE_URL = "http://localhost:8081";

function enviarContato(){
    const errorLabel = document.getElementById("error-label");
    const nomeInput = document.getElementById("name-field");
    const emailInput = document.getElementById("email-field");
    const foneInput = document.getElementById("fone-field");
    const assuntoInput = document.getElementById("assunto-field");

    if(!nomeInput.value || !foneInput.value || !assuntoInput.value || !emailInput.value){
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }
        
    axios.post(BASE_URL + '/contato', {
        nome: nomeInput.value,
        fone: foneInput.value,
        email: emailInput.value,
        assunto: assuntoInput.value
    })
        .then(function (response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.alert('Mensagem enviada!');
            nomeInput.value = ''
            emailInput.value = ''
            foneInput.value = ''
            assuntoInput.value = ''
        })
        .catch(function (error) {
            errorLabel.innerText = "Não foi possivel enviar sua mensagem";
        });
}

