

//function switchColor ||Mudança de cores no perfil
//Para isso é necessário terminar o CSS primeiro. ||Modal, logoNeon, ||relógio pomodoro

//function action ||Mudança de action(pomodoro, shortbreak..). Alterando classe(active) e sua operação

//function pomodoroClock ||Todo o calculo para a funcionalidade do relógio. + progress Bar
//(Botão Pause/Continue)

//~Bonus

//Easter Egg

//Variables


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
    let pomodoroValue = document.getElementById('pomodoro-option').value //Pomodoro Time
    let shortValue = document.getElementById('short-option').value //Short Break Time
    let longValue = document.getElementById('long-option').value //Long Break Time

    //Color
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color

    //setTime
    // setTime(pomodoroTime, shortTime, longTime)
    timeSettings.pomodoroTime = pomodoroValue
    timeSettings.shortTime = shortValue
    timeSettings.longTime = longValue
    
    //setColor
    selectColor(colorValue)
    // colorSettings.setColor = colorValue
    setStyle() //Set Color and display.

    //Close Modal
    modal.style.display = 'none'
})

function selectColor(color){
    switch(color){
        case 'blue':
            colorSettings.setMainColor = '#4D4DFF' //neon: blue
            colorSettings.setSecondColor = '#0000ff' //Blue
            break
        case 'red':
            colorSettings.setMainColor = '#ff4d4d' //neon: red
            colorSettings.setSecondColor = '#ff0000' //Red
            break
        case 'green':
            colorSettings.setMainColor = '#4dff5c' //neon: green
            colorSettings.setSecondColor = '#008000' //Green
            break
    }
}

//Set Time & Set Color
let colorSettings = {

    //Color
    color: '',
    mainColor: '',
    secondColor: '',
    
    set setColor (value) {    
        this.color = value
    },

    set setMainColor (value) {    
        this.mainColor = value
    },
    
    set setSecondColor (value) {    
        this.secondColor = value
    }
}

let timeSettings = {

    //Time
    pomodoro: '',
    shortBreak: '',
    longBreak: '',

    set pomodoroTime (value) {    
        this.pomodoro = value
    },

    set shortTime (value) {    
        this.shortBreak = value
    },

    set longTime (value) {    
        this.longBreak = value
    },

}

//Test
timeSettings.pomodoroTime = 25
console.log(timeSettings.pomodoro)

function switchColor(element){

    let mainColor = colorSettings.mainColor 

    let applyButton = document.getElementById('save-option')
    
    //class active(pomodoro, shortBreak, longBreak)
    element.style.background = mainColor
    element.style.border = '1px solid' + mainColor
    element.style.color = '#151932'
    element.style.fontWeight = '600'

    applyButton.style.background = mainColor
}


let buttonType = document.querySelectorAll('.buttonType')

function selectElement(){
    for(i = 0; i < buttonType.length; i++){

        click(buttonType[i], i)

    }
}

function clearStyle() {
    for(i = 0; i < buttonType.length; i++){

        buttonType[i].removeAttribute("style")

    }
}

function setStyle() {
    for(i = 0; i < buttonType.length; i++){

        if(buttonType[i].hasAttribute('Style')){
            switchColor(buttonType[i])
            progressBar()
            break
        }

    }
}

//Window.Load first time
window.addEventListener('load', () => {
    switchColor(buttonType[0])
});

//if its second time load, reload with the color of the input radio
if(!setStyle()){
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color
    selectColor(colorValue)
}


function click(element, value){
    element.addEventListener('click', () => {

        switch(value){
            case 0:
                clearStyle()
                switchColor(element)
                break
            case 1:
                clearStyle()
                switchColor(element)
                break
            case 2:
                clearStyle() 
                switchColor(element)
                break
        }
    })
}
selectElement()
//Adicionar setTime/Color em uma única função junto com o cronometro + canvas
//Selecionar o ID pelo click e deixar default o resto

//console.log(pomodoro, shortBreak, longBreak)



const teste = document.getElementById('progressBar')

teste.addEventListener('click', () => {
    
    alert('Oi matias....')

})

let canvas = document.getElementById('progressBar')
let context = canvas.getContext('2d')
let centerX = canvas.width / 2
let centerY = canvas.height / 2
let radius = 154

context.lineCap = 'round'
context.beginPath()
context.arc(centerX, centerY, radius, 0, 2 * Math.PI)
context.fillStyle = 'green'
context.lineWidth = 10
context.strokeStyle = '#151932'
context.stroke()

context.beginPath()
context.arc(centerX, centerY, radius, 0.5, 2 * Math.PI)
context.fillStyle = 'transparent'
context.lineWidth = 10
context.shadowOffsetX = 0
context.shadowOffsetY = 0
context.shadowBlur = 15
context.stroke()

//progressBar(time, color)
//Progress Bar                   
let progressBar = function() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    let mainColor = colorSettings.mainColor
    let secondColor = colorSettings.secondColor

    context.strokeStyle = mainColor //color
    context.shadowColor = secondColor //shadow
    context.stroke()
    
}

progressBar()






