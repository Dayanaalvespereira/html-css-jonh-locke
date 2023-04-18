const esconder =document.getElementById("btn_esconder")
const mostrar = document.getElementById("but_mostrar")
const imagem = document.getElementById("john")

esconder.addEventListener("click",function(){
    imagem.style.visibility = "hidden";


})

mostrar.addEventListener("click",function(){
    imagem.style.visibility = "visible"

})