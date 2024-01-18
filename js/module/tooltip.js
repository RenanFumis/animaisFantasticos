export default function iniciarTooltip(){
  const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((i) =>{
      i.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event){
      const tooltipBox = criarTooltipBox(this)
      tooltipBox.style.top = event.pageY + 'px'
      tooltipBox.style.left = event.pageX + 'px'

      onMouseMove.tooltipBox = tooltipBox
      this.addEventListener('mousemove', onMouseMove)

      onMouseLeave.tooltipBox = tooltipBox
      onMouseLeave.element = this
      this.addEventListener('mouseleave', onMouseLeave)
    
    }

    const onMouseLeave = {
      
      handleEvent(){
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
      }
    }

    const onMouseMove = {
      handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px'
        this.tooltipBox.style.left = event.pageX + 20+  'px'
      }
    }

    function criarTooltipBox(element){
      const tooltipBox = document.createElement('div')
      const texto = element.getAttribute('aria-label')
      tooltipBox.classList.add('tooltip')
      tooltipBox.innerText = texto
      document.body.appendChild(tooltipBox)
      return tooltipBox

    }

}

