const URL_USERS = "https://jsonplaceholder.typicode.com/users";

fetch(URL_USERS) 
    .then((response) => response.json())
    .then((data) => showData(data));

function showData(data) {
    console.log("Data", data);
    let body = '';
    for(let i = 0; i<data.length; i++){
        console.log(data[i]);
        body +=`
            <table>
                <tr>        
                    <td>${data[i].name}</td>
                    <td>${data[i].id}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phone}</td>   
                    <td>${data[i].address.city}</td>    
                    <td>${data[i].company.name}</td>  
                <tr>
            </table>    
        `;
    }

    document.getElementById("fetch-petition").innerHTML = body;
}

/*Nombre, Id, email, teléfono, ciudad del usuario. nombre de la compañía*/