import AnimacaoNumeros from './animaNumeros.js'

export default  function iniFetchAnimais(){

  function criandoAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3> <p><span data-numero>${animal.total}</span><sub>milhões</sub></p>`
    return div
    }

  async function fetchAnimais(url){
    try{
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid')
      animaisJson.forEach((animal) => {
        const divAnimal = criandoAnimal(animal)
        numerosGrid.appendChild(divAnimal)
      });

      const animacaoNumeros = new AnimacaoNumeros('[data-numero]', '.numeros', 'ativo')
      animacaoNumeros.init()
    } catch(erro){
      console.log(erro)
    }
  } 
  
  
 
  
  fetchAnimais('./animaisAPI.json')
}

