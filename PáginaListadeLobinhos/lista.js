//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
fetchJSONData().then(data => console.log(data));
// fetchJSONData().then(data => console.log(data)); 

async function getData(id) {
    let data = await fetchJSONData()
    return data[id]
}
let filtro = document.getElementById("adotados")
let wolfpack = document.querySelector(".wolfpack")

function IsAdopted(id){
    getData(id).then((data) => {
        if (!data.adotado){
            return true
        }else{
            return false
        }
    })
}





/* Funcionalidade 1: Criar um card do lobo a partir do arquivo JSON*/
function Card(id, adopteds = false){
    // Criar elementos
        //Container
    let container = document.createElement("div")
    container.classList.add("container")
        //Wolf Image
    let wolf_img = document.createElement("div")

        // Wolf Description
    let wolf_des = document.createElement("div")
    wolf_des.classList.add("wolf_description")
        //Wolf Name and age
    let wolf_main = document.createElement("span")
    let wolf_name = document.createElement("h2")
    wolf_name.id = id
    wolf_name.classList.add("wolf_name")
    let adopt = document.createElement("button")
    adopt.classList.add("adopt")
    let wolf_age = document.createElement("p")
    wolf_age.classList.add("wolf_age")
    let description = document.createElement("p")
    let img = document.createElement("img")
    
    // Colocar um elemento dentro de outro
    
    wolf_des.append(wolf_main)
    wolf_main.append(wolf_name)
    wolf_main.append(adopt)
    wolf_des.append(wolf_age)
    wolf_des.append(description)
    wolf_img.append(img)

    // Pegar as informações e adicionar em um elemento
    // Nome
    if (adopteds){
        // Mostra todos os lobos
        getData(id).then((dados) => {

        wolf_name.innerText = dados.nome
        wolf_age.innerText = `Idade: ${dados.idade} anos`
        description.innerText = dados.descricao
        img.setAttribute("src", dados.imagem)

        // TODO: Adicionar filtro para lobos adotados

        // Adotado?
        if (dados.adotado) {
            adopt.innerText = "Adotado"
            adopt.style.backgroundColor = "#7AAC3A"
            let dono = document.createElement("h2")
            dono.innerText = `Adotado por ${dados.nomeDono}`
            description.append(dono)

        } else {
            adopt.innerText = "Adotar"
        }

        // Critério de alternância entre esquerda e direita
        if (dados.id % 2 == 1) {
            // Manter a mesma ordem dentro do card
            container.append(wolf_img)
            container.append(wolf_des)

            // Manter a mesma classe na imagem
            wolf_img.classList.add("wolf_img")
        } else {
            // Inverter a ordem dentro do card
            container.append(wolf_des)
            container.append(wolf_img)

            // Mudar a classe da imagem
            wolf_img.classList.add("wolf_img2")
        }
        wolfpack.append(container)

    })
    }else{
        // Só vai mostrar os que estão para adoção
        let contador = id
        while (IsAdopted(contador) == true){
            contador++
        }


        getData(contador).then((dados) => {

            wolf_name.innerText = dados.nome
            wolf_age.innerText = `Idade: ${dados.idade} anos`
            description.innerText = dados.descricao
            img.setAttribute("src", dados.imagem)
    
            // TODO: Adicionar filtro para lobos adotados
    
            // Adotado?
            if (dados.adotado) {
                adopt.innerText = "Adotado"
                adopt.style.backgroundColor = "#7AAC3A"
                let dono = document.createElement("h2")
                dono.innerText = `Adotado por ${dados.nomeDono}`
                description.append(dono)
            } else {
                adopt.innerText = "Adotar"
            }
    
    
            // Critério de alternância entre esquerda e direita
            if (dados.id % 2 == 1) {
                // Manter a mesma ordem dentro do card
                container.append(wolf_img)
                container.append(wolf_des)
    
                // Manter a mesma classe na imagem
                wolf_img.classList.add("wolf_img")
            } else {
                // Inverter a ordem dentro do card
                container.append(wolf_des)
                container.append(wolf_img)
    
                // Mudar a classe da imagem
                wolf_img.classList.add("wolf_img2")
            }
            wolfpack.append(container)

        })   
    }
}

for (let i = 0; i < 4; i++) {
    Card(i)
}

// TODO: Adicionar forma de identificar a página atual
// TODO: Mudar o conteúdo que a função puxará de acordo com a página atual

filtro.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      alert('checado');
    } else {
      alert('nao checado');
    }
  })
  