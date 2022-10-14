"use strict";
// function getInfoFetch(){
//     const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams';
//     var teste;
//     fetch(url,{
//         method: 'GET',
//         headers:{
//             'git-user': 'thalisribeiro'
//         }
//     })
//     .then((response)=>{
//         // console.log(response.json());
//         return response.json();
//     }).then(corpo=>{{
//         console.log(corpo.Result);
//         teste = corpo.Result;
//         console.log(teste[1]);
//     }})
//     return teste
// }
async function fetchTeams() {
    const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams';
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'git-user': 'thalisribeiro'
            }
        });
        const data = await response.json();
        return data.Result;
    }
    catch (error) {
        console.error(error);
    }
}
async function finalSend(finalJson) {
    const url = 'https://estagio.geopostenergy.com/WorldCup/InsertFinalResult';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'git-user': 'thalisribeiro',
                "Content-type": "application/json; charset=UTF-8"
            },
            body: finalJson
        });
        const data = await response.json();
        console.log(data);
        return data.Result;
    }
    catch (error) {
        console.error(error);
    }
}
