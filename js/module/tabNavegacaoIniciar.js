export default class TabNavegacao {
  constructor(menu, descricao){
     this.tabMenu = document.querySelectorAll(menu)
     this.tabDescricao = document.querySelectorAll(descricao)
     this.classAtiva = 'ativo'
  }
      //Ativa a tab de acordo com o index dela
      activeTab(index){
        this.tabDescricao.forEach((section) => {
          section.classList.remove(this.classAtiva)
        })
        const direcao = this.tabDescricao[index].dataset.anime
        this.tabDescricao[index].classList.add(this.classAtiva, direcao)
      }
       //Adiciona os eventos das tabs
      addTabNavEvent(){
        this.tabMenu.forEach((itemMenu, index) => {
          itemMenu.addEventListener('click', () => this.activeTab(index))
        })
      }

      init(){
        if(this.tabMenu.length && this.tabDescricao.length){
          //ativar o primeiro item
          this.activeTab(0)
          this.addTabNavEvent()
        }
      }
  }
// Criamos uma nova função para poder usar os mesmos argumentos. Lembrando que temos que ativar a função para ele continuar funcionando.




