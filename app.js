
function pesquisar() {

    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase();

    // Verifica se o campo foi preenchido e escreve uma mensagem na tela.    
    if (campoPesquisa == ""){
        section.innerHTML = `<p class = "inputVazio" > Preencha o campo antes de pesquisar. </p>`
        return;       
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let nomeMin = "";
    let dietaMin = "";
    let habitatMin = "";
    let curiosidadeMin = "";
    let marcadoresMin = "";

    // Itera sobre cada animal no array 'infoFauna'.
    for (let blocoInf of infoFauna) {
        nomeMin = blocoInf.nome.toLowerCase();
        dietaMin = blocoInf.dieta.toLowerCase();
        habitatMin = blocoInf.habitat.toLowerCase();
        curiosidadeMin = blocoInf.curiosidade.toLowerCase();
        marcadoresMin = blocoInf.marcadores.toLowerCase();
        
        // Se o conteúdo da pesquisa tiver relação com alguma informação sobre algum animal é demonstrado um "card" sobre o mesmo
        if (nomeMin.includes(campoPesquisa) || dietaMin.includes(campoPesquisa) || habitatMin.includes(campoPesquisa) || curiosidadeMin.includes(campoPesquisa) || marcadoresMin.includes(campoPesquisa)) {
        // Concatena a string 'resultados' com uma nova div que representa um resultado da pesquisa.
        // Utiliza template literals (``) para facilitar a construção da string e inserir as propriedades do objeto.
            resultados += `<div class="item-resultado"> <h2> ${blocoInf.nome} </h2> <p class="descricao-meta"> ${blocoInf.habitat} <br> ${blocoInf.dieta} <br> ${blocoInf.curiosidade} </p> <a href="${blocoInf.link}" target="_blank"> Para saber mais clique aqui </a> </div>`;
        } 
    }

    if (!resultados) {
            resultados = `<p class = "nEncontrado"> O animal pesquisado não foi encontrado. </p>`
        }
    
    // Substitui o conteúdo HTML da seção "resultados-pesquisa" pelos resultados gerados.
    section.innerHTML = resultados;
}


