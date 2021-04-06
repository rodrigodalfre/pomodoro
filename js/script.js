

//function changeColor ||Mudança de cores no perfil
//Para isso é necessário terminar o CSS primeiro. ||Modal, logoNeon, ||relógio pomodoro

//function action ||Mudança de action(pomodoro, shortbreak..). Alterando classe(active) e sua operação

//function pomodoroClock ||Todo o calculo para a funcionalidade do relógio. + progress Bar
//(Botão Pause/Continue)

//~Bonus

//Easter Egg

//Modal & settings
let settings = document.getElementById('gear') //Settings
let modal = document.getElementById('modal') //Modal-Settings
let close = document.getElementsByClassName('close')[0] //Close Button
let apply = document.getElementById('save-option') //Apply Button

//Open Settings
settings.addEventListener('click', () => {
    modal.style.display = 'block'
})

//Close Settings
close.addEventListener('click', () => {
    modal.style.display = 'none'
})

//close if user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
    if(event.target == modal){
        modal.style.display = 'none'
    }
})

//Apply Button & Settings
apply.addEventListener('click', () => {

    let pomodoroTime = document.getElementById('pomodoro-option').value
    //ValorTeste

    //setTime
    setTime(pomodoroTime)
    //progressBar(time, color)

    setColor('azul')
    //changeColor(color)

    modal.style.display = 'none'
})

//Teste//
function setTime(time){

    console.log(time)

}

function setColor(color){

    console.log(color)

}


const teste = document.getElementById('myCanvas')

teste.addEventListener('click', () => {
    
    alert('Oi matias....')

})


//progressBar(time, color)
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






