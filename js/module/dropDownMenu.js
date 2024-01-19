import outsideClick from './clicandoForaMenuDropdown.js'
 
 export default class DropDownMenu {
  constructor (menusDropdown, evento){
    this.menusDropdown = document.querySelectorAll(menusDropdown)
    //Define click e touchstart como argumento padrão de evento caso não seja definido
    if(evento === undefined){
      this.evento = ['click','touchstart']
    } else {
      this.evento = evento
    }
    this.classeAtivada = 'ativo'

    this.dropDownMenuAtivado = this.dropDownMenuAtivado.bind(this)
  }
  
//Ativa o dropdownmenu e adiciona a função que obeserva o clique fora dele
  dropDownMenuAtivado(e){
    e.preventDefault()
      const element = e.currentTarget
      element.classList.add(this.classeAtivada)
      outsideClick(element, this.evento, () =>{
        element.classList.remove('ativo')
      })
  }
//Adiciona os eventos ao dropdownmenu
    addDropDownMenuEvento(){
      this.menusDropdown.forEach((menu) => {
        this.evento.forEach((eventUser)=>{
          menu.addEventListener(eventUser, this.dropDownMenuAtivado, {passive: true})
        })
      })

    }

  init(){
    if(this.menusDropdown.length){
      this.addDropDownMenuEvento()
    }
    return this
  } 
}





