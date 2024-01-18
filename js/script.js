import scrollSuave from './module/scroll-suave.js'
const scrollsuave = new scrollSuave('[data-menu="suave"] a[href^="#"]')
scrollsuave.init();

import animacaoScroll from './module/scroll-animacao.js'
animacaoScroll()

import iniciarTabFaq from './module/tabFaqIniciar.js'
const iniciarAccordion = new iniciarTabFaq('[data-pergunta="accordion"] dt')
iniciarAccordion.init() 

import iniciarTabNavegacao from './module/tabNavegacaoIniciar.js'
iniciarTabNavegacao()

import iniciarModal from './module/modal.js'
iniciarModal()

import iniciarTooltip from './module/tooltip.js'
iniciarTooltip()

import dropDownMenuIniciar from './module/dropDownMenuIniciar.js'
dropDownMenuIniciar()

import menuMobileIniciar from './module/menuMobile.js'
menuMobileIniciar()



import funcionamentoHorario from './module/HorarioFuncionamento_dateObject.js'
funcionamentoHorario()

import iniFetchAnimais from './module/fetchAnimais.js'
iniFetchAnimais()

import apiBitcoin from './module/fetchBitcoin.js'
apiBitcoin()