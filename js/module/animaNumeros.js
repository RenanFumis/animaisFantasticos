export default class AnimacaoNumeros{
  constructor(numeros, targetObservado, classeObservador){
    this.numeros = document.querySelectorAll(numeros)
    this.targetObservado = document.querySelector(targetObservado)
    this.classeObservador = classeObservador
    //Bind do objeto de callback da mutação
    this.ativarNoMomentoCerto = this.ativarNoMomentoCerto.bind(this)
  }

  //Recebe um elemento do DOM com numero no text, incrementa a partir de 0 até o numero final
  static incrementarNumero(numero){
    const total = +numero.innerText
    const incremento = Math.floor(total / 100)
      let inicio = 0
        const timer = setInterval(() =>{
          inicio += incremento
        numero.innerText = inicio;
          if(inicio > total){
            numero.innerText = total
            clearInterval(timer)
          }
        }, 30 * Math.random())
  }

  //Ativa a incrementação do numero.
 inicioDaAnimacaoNumeros(){
      this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }
  
  //Função que ocorre quando a mutação ocorrer
  ativarNoMomentoCerto(mutacao){
    if( mutacao[0].target.classList.contains(this.classeObservador)){
      this.observador.disconnect()
      this.inicioDaAnimacaoNumeros()
    }
  }
  
  //Adiciona o MutationObserver para verificar quanto a classe ativo é adcionada
  addMutacaoObservada(){
    this.observador = new MutationObserver(this.ativarNoMomentoCerto)
    this.observador.observe(this.targetObservado,{attributes: true})
  }

  init(){
    if(this.numeros.length && this.targetObservado){
      this.addMutacaoObservada()
    }
    return this
  }
 
}
