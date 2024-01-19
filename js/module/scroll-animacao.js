 export default class AnimacaoScroll{
  constructor(sections){
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6

    this.checkDistancia = this.checkDistancia.bind(this)
  }
 
  //Pega a distancia de cada seção em relação ao topo do site
    pegarDistancia(){
     this.distancia = [...this.sections].map((section) =>{
        const offset = section.offsetTop
        return {
          element: section,
          offset: Math.floor(offset - this.windowMetade), 
        }
      })
    }

    //Dá check na distancia de cada seção
    checkDistancia(){
      this.distancia.forEach((section) =>{
        if(window.scrollY > section.offset){
          section.element.classList.add('ativo')
        } else if(section.element.classList.contains('ativo')){
          section.element.classList.remove('ativo')
        }
      })
    }
 
      init(){
        if(this.sections.length){
          this.pegarDistancia()
          this.checkDistancia()
          window.addEventListener('scroll', this.checkDistancia)
      }
      return this
      }

      //Remove o evento de scroll se quiser
      pararAnimacao(){
        window.removeEventListener('scroll', this.checkDistancia)
      }
 }  


