//Modal & settings
let settings = document.getElementById('gear') //Settings
let modal = document.getElementById('modal') //Modal-Settings
let close = document.getElementsByClassName('close')[0] //Close Button
let apply = document.getElementById('save-option') //Apply Button

//Audios Options
let pomodoroAudio = document.getElementById('pomodoro-audio')
let shortBreakAudio = document.getElementById('short-audio')
let longBreakAudio = document.getElementById('long-audio')
let repeatAudio = document.getElementById('repeatAudio')
let volumeRange = document.getElementById('volumeRange')

//Time
let pomodoroValue = document.getElementById('pomodoro-option') //Pomodoro Time
let shortValue = document.getElementById('short-option') //Short Break Time
let longValue = document.getElementById('long-option') //Long Break Time

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
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})

//change audio to play
pomodoroAudio.addEventListener("change", function () {
    playAudio(pomodoroAudio.value)
});

shortBreakAudio.addEventListener("change", function () {
    playAudio(shortBreakAudio.value)
});

longBreakAudio.addEventListener("change", function () {
    playAudio(longBreakAudio.value)
});

volumeRange.addEventListener("input", function () {
    audioSettings.volume = volumeRange.value / 100;

    // Atualiza o volume do áudio atual em tempo real
    if (currentAudio) {
        currentAudio.volume = audioSettings.volume;
    }
});

//Apply Button & Settings
apply.addEventListener('click', () => {

    pauseAudio()
    //Color
    let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color

    // timeSettings(pomodoroTime, shortTime, longTime)
    timeSettings.pomodoroTime = pomodoroValue.value
    timeSettings.shortTime = shortValue.value
    timeSettings.longTime = longValue.value

    //Clear Color on Progress Bar
    clearPercent()
    clearProgressBar()

    //Select color to 
    selectColor(colorValue)

    //Set Color/Time and display.
    setOptions()

    //Theme Mode
    switchTheme()

    //Audio Settings
    audioSettings.setPomodoroAudio = pomodoroAudio.value
    audioSettings.setLongBreakAudio = longBreakAudio.value
    audioSettings.setShortBreakAudio = shortBreakAudio.value
    audioSettings.setVolume = volumeRange.value / 100
    audioSettings.setRepeatable = repeatAudio.checked

    //Close Modal
    modal.style.display = 'none'
})

function selectColor(color) {
    switch (color) {
        case 'blue':
            colorSettings.setMainColor = '#4D4DFF'; // neon: blue
            colorSettings.setSecondColor = '#0000ff'; // Blue
            colorSettings.setColorName = 'blue'
            break;
        case 'red':
            colorSettings.setMainColor = '#ff4d4d'; // neon: red
            colorSettings.setSecondColor = '#ff0000'; // Red
            colorSettings.setColorName = 'red'
            break;
        case 'green':
            colorSettings.setMainColor = '#4dff5c'; // neon: green
            colorSettings.setSecondColor = '#008000'; // Green
            colorSettings.setColorName = 'green'
            break;
        case 'magenta':
            colorSettings.setMainColor = '#FF00FF'; // neon: magenta
            colorSettings.setSecondColor = '#ff01ff'; // Magenta
            colorSettings.setColorName = 'magenta'
            break;
        case 'purple':
            colorSettings.setMainColor = '#8A2BE2'; // neon: purple
            colorSettings.setSecondColor = '#9b1fe9'; // Purple
            colorSettings.setColorName = 'purple'
            break;
        case 'yellow':
            colorSettings.setMainColor = '#E6ED07'; // neon: yellow
            colorSettings.setSecondColor = '#f7f700'; // Yellow
            colorSettings.setColorName = 'yellow'
            break;
    }
}


//Set Time & Set Color
let colorSettings = {

    colorName: localStorage.getItem("colorName") ?? 'blue',
    mainColor: localStorage.getItem("mainColor") ?? '#4D4DFF',
    secondColor: localStorage.getItem("secondColor") ?? '#0000ff',

    set setMainColor(value) {
        this.mainColor = value
        localStorage.setItem("mainColor", value);
    },

    set setSecondColor(value) {
        this.secondColor = value
        localStorage.setItem("secondColor", value)
    },

    set setColorName(value) {
        this.colorName = value
        localStorage.setItem('colorName', value)
    }
}

let audioSettings = {
    pomodoroAudio: localStorage.getItem("pomodoroAudio") ?? "",
    shortBreakAudio: localStorage.getItem("shortBreakAudio") ?? "",
    longBreakAudio: localStorage.getItem("longBreakAudio") ?? "",
    volume: parseFloat(localStorage.getItem("volume")) || 0.5,
    repeatable: localStorage.getItem("repeatable") || 'false',

    set setPomodoroAudio(value) {
        this.pomodoroAudio = value;
        localStorage.setItem("pomodoroAudio", value);
    },

    set setShortBreakAudio(value) {
        this.shortBreakAudio = value;
        localStorage.setItem("shortBreakAudio", value);
    },

    set setLongBreakAudio(value) {
        this.longBreakAudio = value;
        localStorage.setItem("longBreakAudio", value);
    },

    set setVolume(value) {
        this.volume = value;
        localStorage.setItem("volume", value.toString());
    },

    set setRepeatable(value) {
        this.repeatable = value;
        localStorage.setItem("repeatable", value);
    }
};

let timeSettings = {

    pomodoro: localStorage.getItem("pomodoro") ?? "25",
    shortBreak: localStorage.getItem("shortBreak") ?? "5",
    longBreak: localStorage.getItem("longBreak") ?? "10",
    timer: localStorage.getItem("timer") ?? "25",
    storage: localStorage.getItem("storage") ?? "25",

    set pomodoroTime(value) {
        this.pomodoro = value;
        localStorage.setItem("pomodoro", value);
    },

    set shortTime(value) {
        this.shortBreak = value;
        localStorage.setItem("shortBreak", value);
    },

    set longTime(value) {
        this.longBreak = value;
        localStorage.setItem("longBreak", value);
    },

    set setTimer(value) {
        this.timer = value;
        localStorage.setItem("timer", value);
    },

    set timeStorage(value) {
        this.storage = value;
        localStorage.setItem("storage", value);
    },
};

function switchColor(element) {
    console.log(element)
    for (i = 0; element.length; i++) {

    }

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

function selectElement() {
    for (i = 0; i < buttonType.length; i++) {

        click(buttonType[i], i)
    }
}

function clearStyle() {
    for (i = 0; i < buttonType.length; i++) {

        buttonType[i].removeAttribute("style")
    }
}

function setChecked() {
    let inputs = document.querySelectorAll('.input-colors input')

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]

        // Verifica se a classe do input é igual ao color salvo
        if (input.classList.contains(colorSettings.colorName)) {
            input.checked = true
        } else {
            input.checked = false
        }
    }

}

function setOptions() {
    for (i = 0; i < buttonType.length; i++) {

        if (buttonType[i].hasAttribute('Style')) {
            setChecked()
            switchColor(buttonType[i])
            switchTime(i)
            progressBar()
            break
        }
    }
}

function getAudioFromOption() {
    for (i = 0; i < buttonType.length; i++) {
        if (buttonType[i].hasAttribute('Style')) {
            switch (buttonType[i].value) {
                case '0':
                    playAudio(audioSettings.pomodoroAudio)
                    break

                case '1':
                    playAudio(audioSettings.shortBreakAudio)
                    break

                case '2':
                    playAudio(audioSettings.longBreakAudio)
                    break
            }
        }
    }
}


function click(element, value) {
    element.addEventListener('click', () => {
        clearProgressBar()
        clearPercent()
        clearStyle()
        switchColor(element)

        switch (value) {
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

    switch (value) {
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
    running = false
    timeSettings.setTimer = results

    //set time storage
    timeSettings.timeStorage = timeSettings.timer

    title.innerHTML = 'Pomodoro'
    document.getElementById('time').innerHTML = results + ':00'
}

function timeConvert(n) {

    //minutes
    let minutes = (n / 60)
    let rminutes = Math.floor(minutes)

    //to seconds
    let seconds = (minutes - rminutes) * 60
    let rseconds = Math.round(seconds)

    if (rseconds <= 9) {
        results = rminutes + ':0' + rseconds
        titleResults = rminutes + ':0' + rseconds
    } else {
        results = rminutes + ':' + rseconds
        titleResults = rminutes + ':' + rseconds
    }

    //Set another timer value 
    timeSettings.timer = (n / 60)

    document.getElementById('time').innerHTML = results //stopwatcher
    document.getElementById('title').innerHTML = titleResults + ' - Pomodoro' //title
}

//Theme Mode
function switchTheme() {
    let switchM = document.getElementById('switch-mode')

    if (switchM.checked) {
        localStorage.setItem('theme', 'dark')
        themeMode()
    } else {
        localStorage.setItem('theme', 'light')
        themeMode()
    }
}

function themeMode() {
    let switchM = document.getElementById('switch-mode')
    let theme = localStorage.getItem('theme')
    let pomodoro = document.getElementById('pomodoro')
    let body = document.body.classList

    if (theme == 'dark') {
        body.remove('lightmode')
        body.add('darkmode')
        pomodoro.classList.add('darkpomodoro')
        switchM.checked = true

        if (!pomodoro.hasAttribute('style')) {
            setTimeout(function () {
                pomodoro.style.color = colorSettings.mainColor
                pomodoro.style.textShadow = '0px 0px 11px ' + colorSettings.secondColor
            }, 2500);
        } else {
            pomodoro.style.color = colorSettings.mainColor
            pomodoro.style.textShadow = '0px 0px 11px ' + colorSettings.secondColor
        }
    }

    if (theme == 'light') {
        body.remove('darkmode')
        pomodoro.classList.remove('darkpomodoro')
        pomodoro.removeAttribute('style')
    }
}


let cron = null //stopWatcher
let timer = document.getElementById('progressBar')
let statusHtml = document.getElementById('status')
let title = document.getElementById('title')

let running = false
timer.addEventListener('click', () => {

    if (time !== 0) {
        if (!running) {
            start()
            running = true
        } else {
            pause()
            running = false
        }
    }
})

function start() {
    pauseAudio();
    running = null;
    let t = timeSettings.timer;
    let value = t * 60;

    cron = setInterval(function () {
        if (value != 0) {
            calcProgressBar(value);
            value -= 1;
            timeConvert(value);
        } else {
            running = false;
            restart();
            getAudioFromOption();
            console.log('terminou');
        }
    }, 1000);

    statusHtml.innerHTML = 'PAUSE';
}

function restart() {
    pause();
    timeSettings.setTimer = timeSettings.storage;
    document.getElementById('time').innerHTML = timeSettings.storage + ':00';
    title.innerHTML = 'RESTART - Pomodoro';
    statusHtml.innerHTML = 'RESTART';
}

function pause() {
    clearInterval(cron);
    statusHtml.innerHTML = 'START';
}



let canvas = document.getElementById('progressBar')
let context = canvas.getContext('2d')
let centerX = canvas.width / 2
let centerY = canvas.height / 2
let radius = 154
let progress = 0

context.beginPath()
context.lineCap = 'round'
context.arc(centerX, centerY, radius, 0, 2 * Math.PI)
context.fillStyle = 'transparent'
context.lineWidth = 10
context.shadowBlur = 15
context.stroke()

let progressBar = function () {

    let mainColor = colorSettings.mainColor
    let secondColor = colorSettings.secondColor

    context.strokeStyle = mainColor //color
    context.shadowColor = secondColor //shadow
    context.stroke()

}

let calc = 100
function calcProgressBar(valor) {

    let timeStorage = timeSettings.storage * 60

    let porcentagemValue = (timeStorage * calc) / 100
    let porcentagem = Math.round(porcentagemValue)

    if (valor === 1) {
        calc += 100
    }

    if (timeSettings.storage != 1) {
        if (valor == porcentagem) {
            calc -= 1
            subProgressBar(1)
        }

    } else {
        if (valor == porcentagem) {
            calc -= 2
            subProgressBar(2)
        }
    }
}

function subProgressBar(value) {
    let percent = (6.29 * value) / 100

    progress += percent

    clearProgressBar()

    context.beginPath()
    context.arc(centerX, centerY, radius, progress, 2 * Math.PI)
    context.stroke()
}

function clearPercent() {
    let diffCalc = 100 - calc

    calc += diffCalc
    progress = 0

    context.beginPath()
    context.arc(centerX, centerY, radius, progress, 2 * Math.PI)
    context.stroke()
}

function clearProgressBar() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

let currentAudio = null;
let stopTimeout = null;
let repeatInterval = null;

function playAudio(value) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(stopTimeout);
        clearInterval(repeatInterval);
    }

    const repeat = audioSettings.repeatable;

    currentAudio = new Audio(`audios/${value}.mp3`);
    currentAudio.volume = audioSettings.volume;
    currentAudio.play();

    if (repeat) {
        repeatInterval = setInterval(() => {
            if (currentAudio) {
                currentAudio.currentTime = 0;
                currentAudio.play();
            }
        }, 4000);
    } else {
        stopTimeout = setTimeout(() => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        }, 4000);
    }
}

function pauseAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        clearTimeout(stopTimeout);
        clearInterval(repeatInterval);
        repeatInterval = null;
    }
}


//Window.Load first time
window.addEventListener('load', () => {

    switchColor(buttonType[0])
    switchTime(0)
    selectElement()
    progressBar()
    themeMode()
    setChecked()

    pomodoroValue.value = timeSettings.pomodoro
    shortValue.value = timeSettings.shortBreak
    longValue.value = timeSettings.longBreak
});


// //if its second time load, reload with the color of the input radio
// if(!setOptions()){
//     let colorValue = document.querySelector('input[name="input-color"]:checked').value //Input Color
//     selectColor(colorValue)
// }







