function pesquisar() {
    // Seleciona o elemento HTML que irá conter os resultados
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (campoPesquisa == ""){
       section.innerHTML= "<p> Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada resultado da pesquisa

    for (let dado of dados) {
      
      titulo = dado.titulo.toLowerCase()
      descrição = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // Confere se o titulo pesquisa existe ba base de dados 
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        
        //cria um novo elemento 
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Ouça agora</a>
        </div>
      `;
      };
    }
  
    if ( !resultados){

      resultados = "<p> Você não pesquisou por uma musica <p>"
    }
    // Insere os resultados no elemento HTML
    section.innerHTML = resultados;
}

