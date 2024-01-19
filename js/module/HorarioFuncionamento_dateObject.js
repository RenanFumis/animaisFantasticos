export default class FuncionamentoHorario{
  constructor(funcionamento, classeAtiva){
    this.funcionamento = document.querySelector(funcionamento)
    this.classeAtiva = classeAtiva
  }

dadosFuncionamento(){
  this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
  this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
}

dadosAgora(){
  this.dataAgora = new Date()
  this.diaAgora = this.dataAgora.getDay()
  this.horarioAgora = this.dataAgora.getUTCHours() - 3
}

abertoAgora(){
// Verificando se está no dia da semana
const estaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1

// Verificando se está no horário corporativo
let horariEdiaAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

return estaAberto && horariEdiaAberto
}

abertoAtivo(){
  if(this.abertoAgora()){
    this.funcionamento.classList.add(this.classeAtiva)
  }
 
}

init(){
  if(this.funcionamento){
    this.dadosFuncionamento()
    this.dadosAgora()
    this.abertoAgora()
    this.abertoAtivo()
  }
    return this
  }
}






