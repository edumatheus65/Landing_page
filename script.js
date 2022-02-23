const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


//  Criar um metodo para funcionar o hover praticamente
// de forma automatica
// criar um aaEventListenner para:
// um metodo específico do próprio java script
// responsável por capitar um determinado evento
// ele vai capitar essa informação e vai executar
// algo de acordo com que a gente programar.

// Basicamente o que está acontecendo, é o que o evento
// mouseEvent está sendo escutado pelo addEventListener
// que vai chamar uma eron function que vai pegar o container
//  chamar um classlist pra adicionar uma class e adicionar
//  ou remover nessa classe um hover efect