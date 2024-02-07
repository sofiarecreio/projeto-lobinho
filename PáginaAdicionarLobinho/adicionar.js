//Como estamos lidando com uma promise, a função precisa ser acessada com uso de .then(data => ) para acessar os dados dela
fetchJSONData().then(data => console.log(data)); 

async function getData() {
    let data = await fetchJSONData()
    return data
}

getData()

/*
getData()
    .then(data => {
        // Aqui você pode operar no array retornado pela função fetchJSONData()
        console.log("Array retornado:", data);
        PostWolf()
    })
    .catch(error => {
        console.error("Ocorreu um erro:", error);
    });
*/


// adicionando  lobinhos
async function PostWolf(){
    //selecionando os valores do formulário
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let link_foto = document.querySelector("#link").value;
    let descricao = document.querySelector(".descricao").value;

    // casos inválidos
    if(nome == ""){
        alert("preencha o nome corretamente")
    }else{
        if(idade == "" || isNaN(idade) == true){
            alert("preencha a idade corretamente (somente números)")
        }else{
            if(link_foto == ""){
                alert("preencha o link corretamente")
            }else{
                if(descricao == ""){
                    alert("preencha a descricao corretamente")
                }else{
                    //criando um dicionario com os valores digitados nos campos
                    let dados = {
                        "id" : (dados.lenght+1),
                        "nome": nome,
                        "idade": idade,
                        "descricao": descricao,
                        "imagem": link_foto
                    };
                    //adicionando na array 
                    data.push(JSON.stringify(dados));
                }
            }
        }
    }
}

// selecionando botao de salvar
const btn_salvar = document.querySelector(".btn_salvar")

//ação de apertar o botao
btn_salvar.addEventListener("click",()=>{PostWolf()});


