//Ultiliza função assincrona para retornar os dados do json

export async function fetchJSONData() {
    try {
        const res = await fetch("../lobinhos.json");
        if (!res.ok) {
            throw new Error(`Erro no HTTP!: ${res.status}`);
        }
        //promise que resolve para JSON
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Não foi possível recuperar dados:", error);
    }
}