console.log("Fetch");

const URL_USERS = "https://rickandmortyapi.com/api/character"; //Las direcciones apuntadas a las APIs, se denominan EndPoint

fetch(URL_USERS) //Como no le indico nada, por defecto es un método GET.
    .then((response) => response.json())
    .then((data) => showData(data)); //Nested Promises - Promesas Anidadas

//Paint de data in the DOM with FOR    
function showData(data) {
    console.log("Data", data);
    let body = '';
    for(let i = 0; i<20; i++){
        //console.log(data[i]);
        body +=`         
            <h2>id:${data.results[i].id}</h2>
            <h2>name:${data.results[i].name}</h2>
            <img src="${data.results[i].image}">
            <h2>Specie:${data.results[i].species}</h2>            
        `;
    }

    document.getElementById("fetch-petition").innerHTML = body;
}