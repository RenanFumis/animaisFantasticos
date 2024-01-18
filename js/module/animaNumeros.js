export default function animacaoNumeros(){
  function inicioDaAnimacaoNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')
  
      numeros.forEach((numero) => {
          const total = +numero.innerText
          const incremento = Math.floor(total / 100)
  
        let inicio = 0
          const timer = setInterval(() =>{
            inicio = inicio + incremento
          numero.innerText = inicio;
            if(inicio > total){
              numero.innerText = total
              clearInterval(timer)
            }
          }, 30 * Math.random())
  
      })
  }
  
  function ativarNoMomentoCerto(mutacao){
    if( mutacao[0].target.classList.contains('ativo')){
      observador.disconnect()
      inicioDaAnimacaoNumeros()
    }
  
  }
  
  const targetDeParar = document.querySelector('.numeros')
  const observador = new MutationObserver(ativarNoMomentoCerto)
  
  observador.observe(targetDeParar,{attributes: true})

}

