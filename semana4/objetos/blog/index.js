const objectInformation = {
    postTitleInfo: "",
    postAuthorInfo: "",
    postImageInfo: "",
    postContentInfo: ""
}

let clearPost = () =>{
    let postTitle = document.getElementById('titulo-post')
    postTitle.value = ''

    let postAuthor = document.getElementById('autor-post')
    postAuthor.value =''
    
    let postImage = document.getElementById('imagem-post')
    postImage.value = ''
 
    let postContent = document.getElementById('conteudo-post')
    postContent.value = ''

}

let obejectCreate = (title, author, image, content ) =>{
    objectInformation.postTitleInfo = title
    objectInformation.postAuthorInfo = author
    objectInformation.postImageInfo = image
    objectInformation.postContentInfo = content
} 

let arrayCreate = (obj) =>{
    let array =[]
    for(variable in obj){
        array.push(obj[variable])
    }
    return array

}

function showInformation(array){
    let post = `<ul><li>Título: ${array[0]}</li> <li>Autor: ${array[1]}</li> <li><img src="${array[2]}"></li><li>Conteúdo: ${array[3]}</li></ul>`
    document.getElementById('container-de-posts').innerHTML += post
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("value", post);
    }
}
//https://cdn.pixabay.com/photo/2020/11/28/09/02/road-5784006_960_720.jpg
function addImage(){
    let postImage = document.getElementById('imagem-post')
    let postImageValue = postImage.value
    if ((postImageValue.slice(0,6) === 'https:' ) && ((postImageValue.slice(-4) === '.jpg' ) || (postImageValue.slice(-4) === '.png' ))) {
        return postImageValue
    }
}

let postInformation = () => {
    let postTitle = document.getElementById('titulo-post')
    let postTitleValue = postTitle.value
    console.log(postTitleValue)

    let postAuthor = document.getElementById('autor-post')
    let postAuthorValue = postAuthor.value
    console.log(postAuthorValue)
 
    let postContent = document.getElementById('conteudo-post')
    let postContentValue = postContent.value

    let postImageValue =addImage()
    if (postImageValue === undefined) {
        alert('O link da imagem é inválido, insira o link com início "http" e final ".jpg" ou ".png". Tente de novo.')
    } 
        
    obejectCreate(postTitleValue, postAuthorValue, postImageValue, postContentValue)

    let arrayObjects = []
    arrayObjects = arrayCreate(objectInformation)
    showInformation(arrayObjects)

    console.log(objectInformation)
    console.log(arrayObjects)
    console.log(objectInformation)

    // goToPosts()
    // postUpdate()
    clearPost()
}

function pressEnter(evento){
    if(evento.key === 'Enter'){
        postInformation()
    }
}

function goToPosts() {
    location.href ='post.html'
}

function postUpdate() {
    document.getElementById("container-posts").innerHTML = localStorage.getItem('value');
}