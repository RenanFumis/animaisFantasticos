export default function iniciarTabNavegacao() {

  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabDescricao = document.querySelectorAll('[data-tab="conteudo"]  section')
  const activeClass = 'ativo'
  

  if(tabMenu.length){
      tabDescricao[0].classList.add(activeClass)

    
      function activeTab(index){
        tabDescricao.forEach((item) =>{
          item.classList.remove(activeClass)
        })
        const direcao = tabDescricao[index].dataset.anime
        tabDescricao[index].classList.add(activeClass, direcao)
      }

      tabMenu.forEach((itemMenu, index) =>{
        itemMenu.addEventListener('click', function(){
          activeTab(index)
        })
      })
  }

}
// Criamos uma nova função para poder usar os mesmos argumentos. Lembrando que temos que ativar a função para ele continuar funcionando.




