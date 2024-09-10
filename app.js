function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");
    
    let campoPesquisa = document.getElementById("Campo-pesquisa").value

    // se o campoPesquisa  for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
        titulo =dado.titulo.toLowerCase()
        descricao =  dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `; 
        }
        
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}


// tags :"é usada para ajudar na busca com palavras chaves"





