import scrollSuave from './module/scroll-suave.js'
const scrollsuave = new scrollSuave('[data-menu="suave"] a[href^="#"]')
scrollsuave.init();

import AnimacaoScroll from './module/scroll-animacao.js'
const animacaoScroll = new AnimacaoScroll('[data-anime="scroll"]')
animacaoScroll.init()

import iniciarTabFaq from './module/tabFaqIniciar.js'
const iniciarAccordion = new iniciarTabFaq('[data-pergunta="accordion"] dt')
iniciarAccordion.init() 

import TabNavegacao from './module/tabNavegacaoIniciar.js'
const tabNav = new TabNavegacao('[data-tab="menu"] li', '[data-tab="conteudo"] section')
tabNav.init()

import Modal from './module/modal.js'
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()


import Tooltip from './module/tooltip.js'
const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()


import dropDownMenuIniciar from './module/dropDownMenuIniciar.js'
dropDownMenuIniciar()

import menuMobileIniciar from './module/menuMobile.js'
menuMobileIniciar()



import funcionamentoHorario from './module/HorarioFuncionamento_dateObject.js'
funcionamentoHorario()

import fetchAnimais from './module/fetchAnimais.js'
fetchAnimais('../animaisAPI.json', '.numeros-grid')

import apiBitcoin from './module/fetchBitcoin.js'
apiBitcoin('https://blockchain.info/ticker', '.btcPreco')