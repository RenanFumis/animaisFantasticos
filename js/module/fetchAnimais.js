import animacaoNumeros from './animaNumeros.js'

export default  function iniFetchAnimais(){

  async function fetchAnimais(url){

    try{

      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid')
    
      animaisJson.forEach(animal => {
        const divAnimal = criandoAnimal(animal)
        numerosGrid.appendChild(divAnimal)
      });
      animacaoNumeros()
    } catch(erro){
      console.log(erro)
    }
  } 
  
  function criandoAnimal(animal){
  
  
  const div = document.createElement('div');
  div.classList.add('numero-animal')
  
  div.innerHTML = `<h3>${animal.especie}</h3> <p><span data-numero>${animal.total}</span>milhões</p>`
  
  
  return div
  }
  
  fetchAnimais('./animaisAPI.json')
}

