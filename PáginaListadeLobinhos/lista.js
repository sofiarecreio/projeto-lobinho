import { fetchJSONData } from "../fetch.js";
//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
// fetchJSONData().then(data => console.log(data)); 

async function getData() {
    let data = await fetchJSONData()
    return data
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
function Card(checado) {
    // Mostra todos os lobos
    getData().then((dados) => {
        let loboid = 0
        let valid = 0
        // Verifica se container ja existe
        while (valid < 4){
            let container = document.getElementById(loboid);
            let isNewElement = false;
            if (!container) {
                // Se não crie um novo
                console.log("Novo")
                isNewElement = true;
                container = document.createElement("div");
                container.classList.add("container");
                container.id = loboid;
                var wolf_img = document.createElement("div")
                // Wolf Description
                var wolf_des = document.createElement("div")
                wolf_des.classList.add("wolf_description")
                //Wolf Name and age
                var wolf_main = document.createElement("span")
                var wolf_name = document.createElement("h2")
                
                wolf_name.classList.add("wolf_name")
                var adopt = document.createElement("button")
                adopt.classList.add("adopt")
                var wolf_age = document.createElement("p")
                wolf_age.classList.add("wolf_age")
                var description = document.createElement("p")
                var img = document.createElement("img")
                wolf_des.append(wolf_main)
                wolf_main.append(wolf_name)
                wolf_main.append(adopt)
                wolf_des.append(wolf_age)
                wolf_des.append(description)
                wolf_img.append(img)
                if (dados.id % 2 == 1) {
                    // Manter a mesma ordem dentro do card
                    container.append(wolf_img)
                    container.append(wolf_des)
                    // Manter a mesma classe na imagem
                    wolf_img.classList.add("wolf_img")
                }
                else {
                    // Inverter a ordem dentro do card
                    container.append(wolf_des)
                    container.append(wolf_img)
                }
                wolf_img.classList.add("wolf_img2")
            }
            else {
                console.log("existe update")
                wolf_des.append(wolf_main)
                wolf_main.append(wolf_name)
                wolf_main.append(adopt)
                wolf_des.append(wolf_age)
                wolf_des.append(description)
                wolf_img.append(img)

            }
            if (checado){
                if (dados[loboid].adotado){
                    console.log(dados[loboid])
                    wolf_name.innerText = dados[loboid].nome
                    wolf_age.innerText = `Idade: ${dados[loboid].idade} anos`
                    description.innerText = dados[loboid].descricao
                    img.setAttribute("src", dados[loboid].imagem)
                    container.id = dados[loboid].id
                    adopt.innerText = "Adotado"
                    adopt.style.backgroundColor = "#7AAC3A"
                    let dono = document.createElement("h2")
                    dono.innerText = `Adotado por ${dados.nomeDono}`
                    description.append(dono)  
                    valid += 1
                    console.log(valid)
                    wolfpack.append(container)
                }
                else {      
                    //Atualizar dados
                    console.log(dados[loboid])
                    wolf_name.innerText = dados[loboid].nome
                    wolf_age.innerText = `Idade: ${dados[loboid].idade} anos`
                    description.innerText = dados[loboid].descricao
                    img.setAttribute("src", dados[loboid].imagem)
                    container.id = dados[loboid].id
                    adopt.innerText = "Adotar"
                    valid += 1
                    console.log(valid)
                    wolfpack.append(container)
                    }
                // Mudar a classe da imagem
                if(isNewElement){
                    wolfpack.append(container)
                }
                loboid += 1
                }
            }
        })
    }
        //     // Criar elementos
        //     //Container
        //     let container = document.createElement("div")
        //     container.classList.add("container")
        //     //Wolf Image
        //     let wolf_img = document.createElement("div")

        //     // Wolf Description
        //     let wolf_des = document.createElement("div")
        //     wolf_des.classList.add("wolf_description")
        //     //Wolf Name and age
        //     let wolf_main = document.createElement("span")
        //     let wolf_name = document.createElement("h2")
            
        //     wolf_name.classList.add("wolf_name")
        //     let adopt = document.createElement("button")
        //     adopt.classList.add("adopt")
        //     let wolf_age = document.createElement("p")
        //     wolf_age.classList.add("wolf_age")
        //     let description = document.createElement("p")
        //     let img = document.createElement("img")

        //     // Colocar um elemento dentro de outro

        //     wolf_des.append(wolf_main)
        //     wolf_main.append(wolf_name)
        //     wolf_main.append(adopt)
        //     wolf_des.append(wolf_age)
        //     wolf_des.append(description)
        //     wolf_img.append(img)
        
        //     console.log(dados[i])
        //     wolf_name.innerText = dados[i].nome
        //     wolf_age.innerText = `Idade: ${dados[i].idade} anos`
        //     description.innerText = dados[i].descricao
        //     img.setAttribute("src", dados[i].imagem)
    
        //     // TODO: Adicionar filtro para lobos adotados
    
        //     // Adotado?
        //     console.log(dados.adotado)
        //     if (dados.adotado) {
        //         adopt.innerText = "Adotado"
        //         adopt.style.backgroundColor = "#7AAC3A"
        //         let dono = document.createElement("h2")
        //         dono.innerText = `Adotado por ${dados.nomeDono}`
        //         description.append(dono)
        //     } else {
        //             adopt.innerText = "Adotar"
        //         }
    
    
        //         // Critério de alternância entre esquerda e direita
        //         if (dados.id % 2 == 1) {
        //             // Manter a mesma ordem dentro do card
        //             container.append(wolf_img)
        //             container.append(wolf_des)
    
        //             // Manter a mesma classe na imagem
        //             wolf_img.classList.add("wolf_img")
        //         } else {
        //             // Inverter a ordem dentro do card
        //             container.append(wolf_des)
        //             container.append(wolf_img)
    
        //             // Mudar a classe da imagem
        //             wolf_img.classList.add("wolf_img2")
        //         }
        //         wolfpack.append(container)
        // }
let checado = true 
// TODO: Adicionar forma de identificar a página atual
// TODO: Mudar o conteúdo que a função puxará de acordo com a página atual
Card(checado)

