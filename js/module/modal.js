export default function iniciarModal(){

  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')

    if(botaoAbrir && botaoFechar && containerModal){

          // eslint-disable-next-line no-inner-declarations
          function abrirEFechaModal(event){
          event.preventDefault()
          containerModal.classList.toggle('ativo')
          }

       
          function cliqueForafechar(event){
            if(event.target === this){
              abrirEFechaModal(event)
            }

          }

      botaoAbrir.addEventListener('click', abrirEFechaModal)
      botaoFechar.addEventListener('click', abrirEFechaModal)
      containerModal.addEventListener('click', cliqueForafechar)

    }

}

 