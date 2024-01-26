import outsideClick from './clicandoForaMenuDropdown.js'; //Quando importar algo que está na mesma pasta é só começar com ./
export default class MenuMobile{
  constructor (menuBotao, menuLista, eventos){
    this.menuBotao = document.querySelector(menuBotao)
    this.menuLista = document.querySelector(menuLista)
    this.classeAtiva = 'ativo'
    //Define click e touchstart como argumento padrão de evento caso não seja definido
    if(eventos === undefined) this.eventos = ['touchstart', 'click']
     else this.eventos = eventos
    
    this.abrirMenu = this.abrirMenu.bind(this)
  }

  abrirMenu(evento){
    evento.preventDefault()
    this.menuLista.classList.add(this.classeAtiva);
    this.menuBotao.classList.add(this.classeAtiva);
    outsideClick(this.menuLista, this.eventos, () =>{
      this.menuLista.classList.remove(this.classeAtiva);
      this.menuBotao.classList.remove(this.classeAtiva);
      
    })
  }

  addMenuMobileEvento(){
    this.eventos.forEach((e)=>{
      this.menuBotao.addEventListener(e, this.abrirMenu)
    })
  }
  init(){
    if(this.menuBotao && this.menuLista){
      this.addMenuMobileEvento()
    }
    return this
  }
  
}

