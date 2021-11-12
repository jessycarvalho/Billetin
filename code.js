function preencheCampo(linha){

    document.getElementById('id').value = linha.id  
    document.getElementById('login').value = linha.login  
    document.getElementById('nome').value = linha.nome 
    document.getElementById('email').value = linha.email 
    document.getElementById('telefone').value = linha.telefone 
    
}

function getID() {
    let id = document.getElementById('id').value
    return id
}

async function acessoAPI(){

    let n = getID()

    let URI = `https://api-restuni.herokuapp.com/apicadusuario/cadusuario/${n}`

    let URIs = `https://api-restuni.herokuapp.com/apicadusuario/cadusuario/`

    const myInitGet = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
    };
    const dados = await fetch(URI, myInitGet);
    const elens = await dados.json();
    preencheCampo(elens)


}