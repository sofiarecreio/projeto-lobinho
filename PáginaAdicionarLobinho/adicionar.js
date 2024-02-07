import { fetchJSONData } from "../fetch.js";
//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
fetchJSONData().then(data => console.log(data)); 

async function getData() {
    let data = await fetchJSONData()
    return data
}

// adicionando  lobinho
async function PostWolf(data){
    //selecionando os valores do formulário
    let nome = document.querySelector("#nome");
    let idade = document.querySelector("#idade");
    let link_foto = document.querySelector("#link");
    let descricao = document.querySelector(".descricao");

    // casos inválidos
    if(nome == "" || idade == "" || isNaN(idade.value) == true || link_foto == "" || descricao == ""){
        alert("preencha todos os campos corretamente")
    }else{
        //criando um lobo e adicionando seus dados
        let dados_lobo = {
        "id" : (data.lenght+1),
        "nome": nome.value,
        "idade": parseInt(idade.value),
        "descricao": descricao,
        "imagem": link_foto.value,
        "adotado": false,
        "nomeDono": null,
        "idadeDono": null,
        "emailDono":null
        };
        nome.value = "";
        idade.value = "";
        link_foto.value = "";
        descricao.value = "";
        //adicionando dados do lobo
        data.push(dados_lobo);
        fetch("../lobinhos.json", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao salvar os dados.');
            }
            console.log('Novo lobinho adicionado com sucesso!');
          })
          .catch(error => {
            console.error('Ocorreu um erro:', error);
          });

        //limpando as caixasd de texto


    }
}

// selecionando botao de salvar
const btn_salvar = document.querySelector(".btn_salvar")

//ação de apertar o botao
btn_salvar.addEventListener("click", async () => {
    try {
        let data = await getData();
        await PostWolf(data);
    } catch (error) {
        console.log("ocorreu um erro");
        console.log(error);
    }
});