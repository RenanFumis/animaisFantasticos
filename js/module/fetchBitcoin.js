export default function apiBitcoin(url, target){
  fetch(url).then(response => response.json())
  .then(json => {
  
    const bitcoinPreco = (100 / json.BRL.sell).toFixed(5);
    const liBitcoin = document.querySelector(target);
  
   liBitcoin.innerText = bitcoinPreco
    
  }).catch(erro => {
    console.log(Error(erro))
  })
}

