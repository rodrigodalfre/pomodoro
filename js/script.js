

// logoNeon

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
    let pomodoroValue = document.getElementById('pomodoro-option').value //Pomodoro Time
    let shortValue = document.getElementById('short-option').value //Short Break Time
    let longValue = document.getElementById('long-option').value //Long Break Time

    //Color
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color

    // timeSettings(pomodoroTime, shortTime, longTime)
    timeSettings.pomodoroTime = pomodoroValue
    timeSettings.shortTime = shortValue
    timeSettings.longTime = longValue

    //colorSettings
    selectColor(colorValue)

    //Set Color/Time and display.
    setOptions() 

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

    mainColor: '',
    secondColor: '',
    
    set setMainColor (value) {    
        this.mainColor = value
    },
    
    set setSecondColor (value) {    
        this.secondColor = value
    }
}

let timeSettings = {

    //Time -Min -default
    pomodoro: '25',
    shortBreak: '5',
    longBreak: '10',
    timer: '25',
    storage: '25', 

    set pomodoroTime (value) {
        this.pomodoro = value
    },

    set shortTime (value) {    
        this.shortBreak = value
    },

    set longTime (value) {    
        this.longBreak = value
    },

    set setTimer (value){
        this.timer = value
    },

    set timeStorage (value){
        this.storage = value
    },
}

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

function setOptions() {
    for(i = 0; i < buttonType.length; i++){

        if(buttonType[i].hasAttribute('Style')){
            switchColor(buttonType[i])
            switchTime(i)
            progressBar()
            break
        }

    }
}

//Window.Load first time
window.addEventListener('load', () => {
    switchColor(buttonType[0])
    switchTime(0)
    selectElement()
    stopWatcher()
});

//if its second time load, reload with the color of the input radio
if(!setOptions()){
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color
    selectColor(colorValue)
}


function click(element, value){
    element.addEventListener('click', () => {
        clearStyle()
        switchColor(element)
        
        switch(value){
            case 0: //Pomodoro
                switchTime(value)
                break
                
            case 1: //ShortBreak
                switchTime(value)
                break

            case 2: //LongBreak
                switchTime(value)
                break
        }
    })
}

function switchTime(value) {
    
    switch(value){
        case 0:
            results = timeSettings.pomodoro
            break
        case 1:
            results = timeSettings.shortBreak
            break
        case 2: 
            results = timeSettings.longBreak
            break
    }
    pause()
    timeSettings.setTimer = results

    //set time storage
    timeSettings.timeStorage = timeSettings.timer

    document.getElementById('time').innerHTML = results + ':00'
    console.log(timeSettings.timer)
}

function timeConvert(n){

    //minutes
    let minutes = (n / 60)
    let rminutes = Math.floor(minutes)

    //to seconds
    let seconds = (minutes - rminutes) * 60
    let rseconds = Math.round(seconds)

    if(rseconds <= 9){
        results = rminutes + ':0' + rseconds
        titleResults = rminutes +'m:0' + rseconds + 's'
    } else{
        results = rminutes + ':' + rseconds
        titleResults = rminutes +'m:' + rseconds + 's'
    }

    //for Title
    

    //Set another timer value 
    timeSettings.timer = (n / 60) 
    
    document.getElementById('time').innerHTML = results //stopwatcher
    document.getElementById('title').innerHTML = titleResults + ' - Pomodoro' //title
}


let cron = null //stopWatcher
const timer = document.getElementById('progressBar')
const status = document.getElementById('status')

function stopWatcher(){
    
    let running = false
    
    timer.addEventListener('click', () => {
        if(!running){
            start()
            running = true
        } else{
            pause()
            running = false
        }
    })
}

function start(){
    let t = timeSettings.timer
    let value = t * 60
    
    cron = setInterval(function(){
                
        console.log(value)
        value -= 1
        timeConvert(value)
    
        if(value === 0){
            pause()
            status.innerHTML = 'RESTART'
            timer.addEventListener('click', () => {
                restart()
            })
        }

    }, 1000)
    status.innerHTML = 'PAUSE'

    function restart(){
        let r = timeSettings.storage * 60
        timeConvert(r)
    }

}

function pause(){
    clearInterval(cron)
    status.innerHTML = 'START'
}






    


let canvas = document.getElementById('progressBar')
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






