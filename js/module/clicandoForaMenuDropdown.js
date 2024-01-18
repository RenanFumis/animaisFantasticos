export default function outsideClick(element, events, callback){
  
  const html = document.documentElement;
  const clicouDentro = 'data-outside'

  if(!element.hasAttribute(clicouDentro)){// maneira de adcionarmos apenas uma vez o evento de click dentro, podemos ver isso no Devtolls
    events.forEach((userEvent) =>{
      setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick)})
    })
 
  element.setAttribute(clicouDentro, '')
}
  function handleOutsideClick(event){
   if(!element.contains(event.target)){// ! quer dizer "se for diferente"
    events.forEach((userEvent) =>{
      html.removeEventListener(userEvent, handleOutsideClick)// Remove o evento do browser para não ficar lento, pois sempre que clicamos no botão um evento é criado.
    })
    element.removeAttribute(clicouDentro)
    
    callback()
   }
    
  }
}

 