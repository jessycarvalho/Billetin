//autofill
function criaLinha(user){
    document.getElementById('id').value = user.id;  
    document.getElementById('login').value = user.login; 
    document.getElementById('nome').value = user.nome; 
    document.getElementById('email').value = user.email; 
    document.getElementById('telefone').value = user.telefone;     
}
function doGet() {
    return "GET";
}
function doPost() {
    return "POST";
}
function doPut() {
    return "PUT";
}
function doDelete() {
    return "DELETE";
}
function doFindByID() {
    let n = document.getElementById("id").value;
    return n;
}
async function clienteDados(minhaFuncao) {
    let n = doFindByID();

    const url = `https://api-restuni.herokuapp.com/apicadusuario/cadusuario/${n}`;
    const urls = `https://api-restuni.herokuapp.com/apicadusuario/cadusuario/`;

    console.log(n);

    let rest;

    rest = minhaFuncao;

    let id = document.getElementById("id").value;
    let id = document.getElementById("login").value;
    let id = document.getElementById("nome").value;
    let id = document.getElementById("email").value;
    let id = document.getElementById("telefone").value;

    const object = { id, login, nome, email, telefone };

    const myInitGet =  {
        method: rest, 
        headers: {
            "Content-Type": "application/json",
        },
    };

    const myInitPost = {
        method: rest,
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (rest === "GET") {
        const dados = await fetch(url, myInitGet);
        const elens = await dados.json();
        criaLinha(elens);
    } else if (rest === "POST") {
        const dados = await fetch(url, myInitPost);
        const elens = await dados.json();
        criaLinha(elens);
    } else if(rest === "DELETE"){
        const dados = await fetch(urls, myInitPost);
        const elens = await dados.json();
        criaLinha(elens);
    } else {
        const dados =  await fetch(urls, myInitPost);
        const elens = await dados.json();
        criaLinha(elens);    
    }
}

