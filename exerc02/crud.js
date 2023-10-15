document.addEventListener("DOMContentLoaded", function () {
    // Selecionar elementos do formulário
    const form = document.querySelector(".form");
    const nomeProdutoInput = document.getElementById("produto");
    const quantidadeInput = document.getElementById("estoque");
    const categoriaSelect = document.getElementById("categoria");
    const estadoRadio = document.querySelectorAll('input[type="radio"]');
    const observacoesTextarea = document.getElementById("observacoes");
    const tabela = document.querySelector("table");

    // Array para armazenar os produtos cadastrados
    const produtos = [];

    // Função para adicionar um novo produto
    function adicionarProduto() {
        const nomeProduto = nomeProdutoInput.value;
        const quantidade = quantidadeInput.value;
        const categoria = categoriaSelect.value;
        const estado = Array.from(estadoRadio).find((radio) => radio.checked).value;
        const observacoes = observacoesTextarea.value;

        if (nomeProduto && quantidade && categoria !== "Selecione aqui" && estado) {
            // Criar um objeto com os dados do produto
            const produto = {
                nome: nomeProduto,
                quantidade,
                categoria,
                estado,
                observacoes,
            };

            // Adicionar o produto ao array
            produtos.push(produto);

            // Limpar os campos do formulário
            nomeProdutoInput.value = "";
            quantidadeInput.value = "";
            categoriaSelect.value = "Selecione aqui";
            estadoRadio[0].checked = false;
            estadoRadio[1].checked = false;
            observacoesTextarea.value = "";

            // Atualizar a tabela de produtos
            atualizarTabela();

            // Exibir uma mensagem de sucesso (você pode personalizar)
            alert("Produto cadastrado com sucesso!");
        } else {
            // Exibir uma mensagem de erro se algum campo estiver vazio
            alert("Por favor, preencha todos os campos antes de cadastrar o produto.");
        }
    }

    // Função para atualizar a tabela de produtos
    function atualizarTabela() {
        tabela.innerHTML = `
            <tr>
                <th>Nome do Produto</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Estado</th>
                <th>Observações</th>
            </tr>
        `;

        produtos.forEach((produto) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.categoria}</td>
                <td>${produto.estado}</td>
                <td>${produto.observacoes}</td>
            `;
            tabela.appendChild(row);
        });
    }

    // Adicionar um evento de envio de formulário
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        adicionarProduto();
    });
});
