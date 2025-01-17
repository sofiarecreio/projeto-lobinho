import { fetchJSONData } from "../fetch.js";
//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
// fetchJSONData().then(data => console.log(data)); 
async function getData() {
    let data = await fetchJSONData()
    return data
}
let filtro = document.getElementById("adotados")
let wolfpack = document.querySelector(".wolfpack")
let checado = true
Card(checado)

/* Funcionalidade 1: Criar um card do lobo a partir do arquivo JSON*/
async function Card(checado) {
    // Mostra todos os lobos
    async function criaCard(container, wolf_name,wolf_age,wolf_des,wolf_img,adopt,img,description,wolf_main,loboid, cardid, checado,dono,wolfid){
        let dados = await getData();

        // Se não crie um novo
        let i = loboid
        let valid = 0
        //Enquanto não satisfazer o filtro, nao mostre na tela
        while (valid < 1){

            if(checado){
                wolf_name.innerText = dados[i].nome
                wolf_age.innerText = `Idade: ${dados[i].idade} anos`
                description.innerText = dados[i].descricao
                img.setAttribute("src", dados[i].imagem)
                wolfid.innerText = dados[i].id
                adopt.id = cardid
                adopt.addEventListener('click', function() {
                    // Pega o conteudo do ID
                    var h2Content = document.querySelector('h2.wolfid').innerText;

                    //Guarda id
                    localStorage.setItem('ID', h2Content);

                    
                    window.location.href = '../PáginaShowLobinho/show_lobinho.html';
                });
            
                //     // Adotado?
                if (dados[i].adotado) {
                    adopt.innerText = "Adotado"
                    adopt.style.backgroundColor = "#7AAC3A"
                    dono.innerText = `Adotado por ${dados[i].nomeDono}`
                } else {
                    adopt.innerText = "Adotar"
                    dono.innerText = ""
                }
            }
        
            if (cardid % 2 == 1) {
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
            
            // Mudar a classe da imagem
            wolfpack.append(container)
            valid++
            i++

            
            
            }
            loboid = i
            return loboid
            
        }
        let cardid = 0
        let loboid = 0
        let valid = 0
        for(let i = 0; i < 4; i++){
            let container = document.createElement("div");
            container.classList.add("container");
            container.id = cardid;
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
            description.classList.add("wolf_desc")
            let dono = document.createElement("h2")
            dono.classList.add("dono")
            let wolfid = document.createElement("h2")
            wolfid.classList.add("wolfid")
            //adiciona id como texto escondido
            wolfid.style.display = "none"

            var img = document.createElement("img")
            wolf_des.append(wolf_main)
            wolf_main.append(wolf_name)
            wolf_main.append(adopt)
            wolf_main.append(wolfid)
            wolf_des.append(wolf_age)
            wolf_des.append(description)
            wolf_des.append(dono)
            wolf_img.append(img)
            loboid = await criaCard(container, wolf_name,wolf_age,wolf_des,wolf_img,adopt,img,description,wolf_main,loboid, cardid, checado,dono,wolfid)
            cardid += 1
        }
    }
async function updateCard(checado){
    let cardid = 0
    let dados = await getData();
    let loboid = 0
    for (let i = 0; i < 4; i++){
        let valid = 0
        while (valid < 1){
            let container = document.getElementById(cardid);
            if(container){
                let wolf_name = container.querySelector('.wolf_name');
                let wolf_age = container.querySelector('.wolf_age');
                let description = container.querySelector('.wolf_desc');
                let img = container.querySelector('img');
                let adopt = container.querySelector('.adopt');
                let dono = container.querySelector('.dono')
                let wolfid = container.querySelector('.wolfid')
               
                if(!checado && dados[loboid].adotado === false){
                    //atualize o card

                    wolf_name.innerText = dados[loboid].nome
                    wolf_age.innerText = `Idade: ${dados[loboid].idade} anos`
                    description.innerText = dados[loboid].descricao
                    img.setAttribute("src", dados[loboid].imagem)
                    dono.innerText = ""
                    wolfid.innerText = dados[loboid].id

                    adopt.innerText = "Adotar"
                    adopt.style.backgroundColor = "#DEB959"
                    valid++
                    loboid++
                    cardid++


                } else if (checado) {
                    // atualize o card
                    
                    wolf_name.innerText = dados[loboid].nome
                    wolf_age.innerText = `Idade: ${dados[loboid].idade} anos`
                    description.innerText = dados[loboid].descricao
                    img.setAttribute("src", dados[loboid].imagem)
                    wolfid = dados[loboid].id
                    if(dados[loboid].adotado){
                        dono.innerText = `Adotado por ${dados[loboid].nomeDono}`
                        adopt.innerText = "Adotado"
                        adopt.style.backgroundColor = '#7AAC3A'

                    }
                    else {
                        dono.innerText = ""
                    }
                    valid++
                    loboid++
                    cardid++
                }
                else {
                    loboid++
                }
            }
            else {
                console.log("container é null")
            }
        }
    }

}
async function showResults(nomes){
    let cardid = 0
    let dados = await getData();
    let loboid = 0
    for (let i = 0; i < 4; i++){
        let valid = 0
        while (valid < 1 && loboid < dados.length){
            let container = document.getElementById(cardid);
            if(container){
                let wolf_name = container.querySelector('.wolf_name');
                let wolf_age = container.querySelector('.wolf_age');
                let description = container.querySelector('.wolf_desc');
                let img = container.querySelector('img');
                let adopt = container.querySelector('.adopt');
                let dono = container.querySelector('.dono')
                if(nomes.some(item => item.id === dados[loboid].id)){
                    console.log(`${dados[loboid].id} é valido`)
                    wolf_name.innerText = dados[loboid].nome
                    wolf_age.innerText = `Idade: ${dados[loboid].idade} anos`
                    description.innerText = dados[loboid].descricao
                    img.setAttribute("src", dados[loboid].imagem)
                    dono.innerText = ""
                    adopt.innerText = "Adotar"
                    adopt.style.backgroundColor = "#DEB959"
                    valid++
                    loboid++
                    cardid++
                    container.style.display = "flex"; // Mostra o elemento
                }

                else {
                    if (loboid)
                    loboid++
                    container.style.display = "none"; // Oculta o elemento
                }
            }
        }
    }
}

async function searchNames(inputName) {
    let dados = await getData();
    let filteredData = dados.filter(item => item.nome.toLowerCase().includes(inputName.toLowerCase()));
    let nomes = filteredData.map(item => ({id: item.id, nome: item.nome}));
    if(nomes.length > 0) {
        await showResults(nomes)
    } else {
        console.log("Nenhum nome correspondente encontrado.")
    }
}
filtro.addEventListener('change', function() {
    if (this.checked) {
        checado = true
        updateCard(checado)
    } else {
        checado = false
        updateCard(checado)
    }
});
document.getElementById("search").oninput = function(event) {
    searchNames(event.target.value);
}

var buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var divContent = this.parentElement.innerHTML;
    console.log(divContent);
  });
});