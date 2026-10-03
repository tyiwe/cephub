// ---------------------------------------------------------
// PROJETO: Busca de Endereço (API ViaCEP)
// ---------------------------------------------------------

const form = document.getElementById("searchForm");
const input = document.getElementById("cepInput");
const mensagem = document.getElementById("mensagem");
const card = document.getElementById("enderecoCard");

// Escuta o envio do formulário (clique no botão ou Enter)
form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede a página de recarregar

    const cep = input.value.replace(/\D/g, ""); // tira tudo que não é número
    buscarEndereco(cep);
});

// Busca o endereço na API a partir do CEP digitado
async function buscarEndereco(cep) {
    mensagem.textContent = "Buscando...";
    card.hidden = true;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
            // erro de rede ou da própria API (ex: CEP com formato inválido)
            throw new Error("Não foi possível buscar o CEP");
        }

        const data = await response.json();

        // pegadinha desta API: CEP inexistente volta com status 200,
        // mas o objeto vem como { erro: true }
        if (data.erro) {
            throw new Error("CEP não encontrado");
        }

        mostrarEndereco(data);
        mensagem.textContent = "";

    } catch (erro) {
        mensagem.textContent = erro.message;
    }
}

// Coloca os dados do endereço na tela
function mostrarEndereco(data) {
    document.getElementById("campoRua").textContent = data.logradouro || "Não informado";
    document.getElementById("campoBairro").textContent = data.bairro || "Não informado";
    document.getElementById("campoCidade").textContent = data.localidade;
    document.getElementById("campoEstado").textContent = data.uf;

    card.hidden = false;
}