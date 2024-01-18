import outsideClick from './clicandoForaMenuDropdown.js'; //Quando importar algo que está na mesma pasta é só começar com ./


export default function menuMobileIniciar(){

  const menuBotao = document.querySelector('[data-menu="button"]')
  const menuLista = document.querySelector('[data-menu="lista"]')
  const eventos = ['click', 'touchstart']

  if(menuBotao){
  
      function abrirMenu(){
        menuLista.classList.add('ativo');
        menuBotao.classList.add('ativo');
        outsideClick(menuLista, eventos, () =>{
          menuLista.classList.remove('ativo');
          menuBotao.classList.remove('ativo');
          
        })
      }

      eventos.forEach((e)=>{
        menuBotao.addEventListener(e, abrirMenu, {passive: true})
      })

    menuBotao.addEventListener('click',abrirMenu)
  }
}

