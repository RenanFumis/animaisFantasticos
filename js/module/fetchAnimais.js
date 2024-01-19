import AnimacaoNumeros from './animaNumeros.js'

export default  function fetchAnimais(url, target){

  const numerosGrid = document.querySelector(target)
  //Cria a div com as informações de numero de animais
  function criandoAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3> <p><span data-numero>${animal.total}</span><sub>milhões</sub></p>`
    return div
    }

    //Preenche os animais no DOM
    function preenchendoAnimais(animal){
      const divAnimal = criandoAnimal(animal)
      numerosGrid.appendChild(divAnimal)
    }

    //Anima numeros de cada animal
    function animarAnimaisNumeros(){
      const animacaoNumeros = new AnimacaoNumeros('[data-numero]', '.numeros', 'ativo')
      animacaoNumeros.init()
    }

    //Puxa as informações dos numeros do arquivo JSON e cria cada animal utilizando o criarAnimais
  async function criarAnimais(){
    try{
      //Fetch espera a resposta e transforma a resposta em Json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      //Depois a transformaço em Json ativa as funções para preencher e animar numeros
      animaisJson.forEach(animal => preenchendoAnimais(animal));
      animarAnimaisNumeros()
    } catch(erro){
      console.log(erro)
    }
  } 
  
  return criarAnimais()
 
}

