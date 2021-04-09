

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

    //Time
    let pomodoroTime = document.getElementById('pomodoro-option').value //Pomodoro Time
    let shortTime = document.getElementById('short-option').value //Short Break Time
    let longTime = document.getElementById('long-option').value //Long Break Time

    //Color
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color

    //setTime
    setTime(pomodoroTime, shortTime, longTime)
    
    //setColor
    setColor(colorValue)

    //Close Modal
    modal.style.display = 'none'
})


//Set Time & Set Color
function setTime(pomodoro, shortBreak, longBreak){

    console.log(pomodoro, shortBreak, longBreak)
    //progressBar(time, color)

}


function setColor(colorValue){

    let color = colorValue

    console.log(color)

    //Elements
    let pomodoro = document.getElementById("btnPomodoro")
    let shortBreak = document.getElementById("btnShort")
    let longBreak = document.getElementById("btnLong")

    switch(color){
        case 'blue':
            mainColor = '#4D4DFF' //neon: blue
            secondColor = '#0000ff' //Blue
            break
        case 'red':
            mainColor = '#ff4d4d' //neon: red
            secondColor = '#ff0000' //Red
            break
        case 'green':
            mainColor = '#4dff5c' //neon: green
            secondColor = '#008000' //Green
            break
    }

    //A class setColor/Time pode ser um controller
    //Adicionar changeColor mainColor e secondColor
    //na classe SetColor, adicionar no switch a função changeColor
    function changeColor(element){
        element.style.background = mainColor
        element.style.border = '1px solid' + mainColor
        element.style.color = '#151932'
        element.style.fontWeight = '600'
    }


    let buttonType = document.querySelectorAll('.buttonType')

    function selectElement(){
        for(i = 0; i < buttonType.length; i++){

            click(buttonType[i], i)

        }
    }

    //Window.Load
    // changeColor(buttonType[0])

    // window.addEventListener('load', () => {
    //     console.log('page is fully loaded');
    // });

    

    function click(element = 'btnPomodoro', value = 0){
        element.addEventListener('click', () => {

            console.log(element.id)

            //Re-do the code
            switch(value){
                case 0:
                    buttonType[1].removeAttribute("style")
                    buttonType[2].removeAttribute("style")
                    changeColor(element)
                case 1:
                    buttonType[0].removeAttribute("style")
                    buttonType[2].removeAttribute("style")
                    changeColor(element)
                case 2: 
                    buttonType[0].removeAttribute("style")
                    buttonType[1].removeAttribute("style")
                    changeColor(element)
            }

        })
    }
    selectElement()
    //Pensar em alguma alternativa para remover ||
    //Adicionar setTime/Color em uma única função junto com o cronometro + canvas
    //Selecionar o ID pelo click e deixar default o resto

    //console.log(pomodoro, shortBreak, longBreak)

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






