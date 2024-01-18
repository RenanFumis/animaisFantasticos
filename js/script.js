import scrollSuave from './module/scroll-suave.js'
const scrollsuave = new scrollSuave('[data-menu="suave"] a[href^="#"]')
scrollsuave.init();

import animacaoScroll from './module/scroll-animacao.js'
animacaoScroll()

import iniciarTabFaq from './module/tabFaqIniciar.js'
const iniciarAccordion = new iniciarTabFaq('[data-pergunta="accordion"] dt')
iniciarAccordion.init() 

import TabNavegacao from './module/tabNavegacaoIniciar.js'
const tabNav = new TabNavegacao('[data-tab="menu"] li', '[data-tab="conteudo"] section')
tabNav.init()

import Modal from './module/modal.js'
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()


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