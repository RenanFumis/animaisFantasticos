import outsideClick from './clicandoForaMenuDropdown.js'
 
 export default function dropDownMenuIniciar() {
  const menusDropdown = document.querySelectorAll('[data-dropdown]')

  menusDropdown.forEach((menu) => {
    ['touchstart', 'click'].forEach((eventUser)=>{
      menu.addEventListener(eventUser, handleClick, {passive: true})
    })
    
  })
  
  function handleClick(e){
    e.preventDefault()
      this.classList.add('ativo')
      outsideClick(this, ['click','touchstart'], () =>{
       this.classList.remove('ativo')
      })
  }
  
}





