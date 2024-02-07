//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
async function getData() {
    let data = await fetchJSONData();
    let obj = data[0]
    return obj
}

let obj = getData()

obj.then(obj => {
    let nome = obj.nome;
    document.getElementById("teste").innerHTML
})

