const BASE_URL = "http://localhost:8081";


function toggleLikeAction(element){
    let imageElement = element.firstChild

    if(imageElement.value == 'liked'){
        imageElement.src = "../tela-livros/heartred.png"
        imageElement.value = "notLiked"
    } else{
        imageElement.src = "../tela-livros/heart.png"
        imageElement.value = "liked"
    }

    const favorito = document.querySelector('.conteudo a')
    console.log(favorito);

    const getValue = element.getAttribute("value")
    console.log(getValue)

    if(getValue === 'liked'){
        window.alert('teste')
    }

    axios.post(BASE_URL + '/tela-videos', {
            id_usuario_favorito: favorito
    })
        .then(function(response){
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/tela-videos/favoritos";
        })

}

// function favoritarVideo(){



// }