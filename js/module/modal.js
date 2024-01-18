export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal){
    this.botaoAbrir = document.querySelector(btnAbrir)
    this.botaoFechar = document.querySelector(btnFechar)
    this.containerModal = document.querySelector(containerModal)

    //bind this ao callback para fazer referencia ao objeto da classe
    this.eventoToggleModal = this.eventoToggleModal.bind(this)
    this.cliqueForafechar = this.cliqueForafechar.bind(this)
  }

  //abre ou fecha o modal
     abrirEFechaModal(){
       this.containerModal.classList.toggle('ativo')
     }

     //adiciona o evento de toggle ao modal

     eventoToggleModal(event) {
      event.preventDefault()
      this.abrirEFechaModal()
     }

     //Fecha o modal ao clicar fora
     cliqueForafechar(event){
        if(event.target === this.containerModal){
         this.abrirEFechaModal()
      }
     }

     //Adiciona os eventos aos elementos do modal
     addModalEvent(){
       this.botaoFechar.addEventListener('click', this.eventoToggleModal)
       this.botaoAbrir.addEventListener('click', this.eventoToggleModal)
       this.containerModal.addEventListener('click', this.cliqueForafechar)
     }

     init(){
      if(this.botaoAbrir && this.botaoFechar && this.containerModal){
        this.addModalEvent()
      }
      return this
     }
    }
