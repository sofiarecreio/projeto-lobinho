//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
import { fetchJSONData } from "../fetch.js";


async function getData(id) {
    let data = await fetchJSONData();
    let obj = data[id]
    return obj
}



// Pegando dados vindos da url de redirecionamento se houver
var parametros = new URLSearchParams(window.location.search)
var id = parametros.get('id')

let ID = document.querySelector(".subtitulo p")
if (!(id === null)) {
    ID.innerHTML = `ID:${id}`
}

// Adicionar elementos do arquivo JSON
let pic = document.querySelector(".img img")
let name = document.querySelector(".titulo p")
getData(id).then((data) => {
    pic.setAttribute("src", data.imagem)
    name.innerHTML += data.nome

})


