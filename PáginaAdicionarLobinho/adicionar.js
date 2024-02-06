import { fetchJSONData } from "../fetch.js";
//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
fetchJSONData().then(data => console.log(data)); 




const btn_enviar = document.querySelector