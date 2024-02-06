export function fetchJSONData() {
    fetch("../lobinhos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`Erro no HTTP!: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Não foi possível recuperar dados:", error));
}
