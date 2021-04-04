
const teste = document.getElementById('myCanvas')

teste.addEventListener('click', () => {
    
    alert('Oi matias....')

})


//function changeColor ||Mudança de cores no perfil
//Para isso é necessário terminar o CSS primeiro. Modal, logoNeon, relógio pomodoro

//function action ||Mudança de action(pomodoro, shortbreak..). Alterando classe(active) e sua operação

//function pomodoroClock ||Todo o calculo para a funcionalidade do relógio. + progress Bar
//(Botão Pause/Continue)

//~Bonus

//Easter Egg


//Progress Bar                          \/ Switch to progressBar
let canvas = document.getElementById('myCanvas')
let context = canvas.getContext('2d')
let centerX = canvas.width / 2
let centerY = canvas.height / 2
let radius = 154

context.lineCap = 'round'
context.beginPath()
context.arc(centerX, centerY, radius, 0, 2 * Math.PI)
context.fillStyle = 'transparent'
context.lineWidth = 10
context.strokeStyle = '#151932'
context.stroke()

context.beginPath()
context.arc(centerX, centerY, radius, 0.5, 2 * Math.PI)
context.fillStyle = 'transparent'
context.lineWidth = 10
context.strokeStyle = '#4D4DFF' //color
context.shadowColor = 'blue'; //shadow
context.shadowBlur = 16;
context.stroke()






