import { fetchJSONData } from "../fetch.js";
//Alterar isso para o item correto
//Recebe o id do lobo da pagina de list

async function getData() {
    let data = await fetchJSONData();
    return data
}

async function getLobo() {
    let loboid = localStorage.getItem("ID") - 1;
    getData().then(dados => {
        let lobo = dados[loboid]
        nomelobo.innerText = lobo.nome;
        desclobo.innerHTML = lobo.descricao;
        imglobo.setAttribute("src", lobo.imagem)
    })
}
async function deleteLobo() {

}
// Função para redirecionar para página de adoção quando clicar no botão "adotar"
function redirect() {
    console.log("Função acionada")
    window.location.href = "../PáginaAdotarLobinhos/adotar.html?id=" + encodeURIComponent(localStorage.getItem("ID") -1)
}
let btn_adotar = document.getElementById("adotar")
btn_adotar.addEventListener("click", redirect)





var nomelobo = document.getElementById("nomelobo")
var desclobo = document.getElementById("desclobo")
var imglobo = document.getElementById("imglobo")
getLobo()
