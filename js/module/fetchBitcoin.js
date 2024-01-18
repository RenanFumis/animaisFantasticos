export default function apiBitcoin(){
  fetch('https://blockchain.info/ticker').then(response => response.json())
  .then(json => {
  
    const bitcoinPreco = (100 / json.BRL.sell).toFixed(5);
    const liBitcoin = document.querySelector('.btcPreco');
  
   liBitcoin.innerText = bitcoinPreco
  
    
  }).catch(erro => {
    console.log(Error(erro))
  })
}

