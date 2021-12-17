function toggleLikeAction(element){
    let imageElement = element.firstChild

    if(imageElement.value == 'liked'){
        imageElement.src = "./heartred.png"
        imageElement.value = "notLiked"
    } else{
        imageElement.src = "./heart.png"
        imageElement.value = "liked"
    }
}