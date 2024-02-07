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
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let link_foto = document.querySelector("#link").value;
    let descricao = document.querySelector(".descricao").value;

    // casos inválidos
    if(nome == "" || idade == "" || isNaN(idade) == true || link_foto == "" || descricao == ""){
        alert("preencha todos os campos corretamente")
    }else{
        //criando um lobo e adicionando seus dados
        let dados_lobo = {
        "id" : (data.lenght+1),
        "nome": nome,
        "idade": idade,
        "descricao": descricao,
        "imagem": link_foto,
        "adotado": false,
        "nomeDono": null,
        "idadeDono": null
        };

        data.push(dados_lobo);
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