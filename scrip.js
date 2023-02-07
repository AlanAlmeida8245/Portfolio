const PaginaDois = document.getElementById("page-2")
PaginaDois.style.display = "none"; // irá esconder a pagina 2
var PaginaSelecionada = 1; //Portfolio irá começar na Página 1 

//navbar
// Animação Maquina de Escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
//-------------------------------------//

//Paginação

function alternarPagina(pageId){

  const PaginaUm = document.getElementById("page-1")

  if(pageId === 1 && PaginaSelecionada !== 1){
    PaginaDois.style.display = "none"
    PaginaSelecionada = 1;
    PaginaUm.style.display = "block";
  }
  if(pageId === 2 && PaginaSelecionada !== 2)
  {
    PaginaDois.style.display = "block"
    PaginaSelecionada = 2;
    PaginaUm.style.display = "none";
  }


}

