let nome = document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.querySelector("#assunto")

function verificarCampos(){
    if(nome.value == "" || email.value == "" || assunto.value =="" ){
        alert("O campo é obrigatório")
    }else{
        alert("Sucesso ao enviar os dados!")
    }
}
