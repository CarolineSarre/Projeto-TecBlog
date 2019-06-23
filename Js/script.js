var campoNome = document.getElementById("nome");

campoNome.addEventListener("blur", function(){
    if(campoNome.value.length > 3){
        if(campoNome.classList.contains("invalido")){
            campoNome.classList.remove("invalido")
        }
      campoNome.classList.add("validado");
    } else {
        if(campoNome.classList.contains("validado")){
            campoNome.classList.remove("validado")
        }
      campoNome.classList.add("invalido");
    }
})
var campoSobrenome= document.getElementById("snome");

campoSobrenome.addEventListener("blur", function(){
    if(campoSobrenome.value.length > 3){
        if(campoSobrenome.classList.contains("invalido")){
            campoSobrenome.classList.remove("invalido")
        }
      campoSobrenome.classList.add("validado");
    } else {
        if(campoSobrenome.classList.contains("validado")){
            campoSobrenome.classList.remove("validado")
        }
      campoSobrenome.classList.add("invalido");
    }
})
