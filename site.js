function entrarPagina(){

    var Senha_Usuário, Nome_Usuário;

    Nome_Usuário = document.getElementById('inpUsuário').value;
    Senha_Usuário = document.getElementById('inpSenha').value;

    if (Nome_Usuário === "Kaua" && Senha_Usuário === "123"){
        alert("login realizado com sucesso!.");
        window.location.href = "login.html";
    }
    else {
        alert("Senha e/ou Usuário incorretos. Tente Novamente")
    }
}