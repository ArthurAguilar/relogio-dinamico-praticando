screenHours = document.querySelector('#hours')
screenMinutes = document.querySelector('#minutes')
screenSeconds = document.querySelector('#seconds')

screenDay = document.querySelector('.day')
screenMonth = document.querySelector('.month')
screenYear = document.querySelector('.year')

alarmHourScreen = document.querySelector('.alarmHour')
inputAlarm = document.querySelector('#inputAlarm')
btnStart = document.querySelector('.start')
btnStop = document.querySelector('.stop')


alarmeOnOff = false
const data = new Date()
let currentTimestamp = data.getTime()
let valueInput = inputAlarm.value * 1000
let alarmTime = valueInput + currentTimestamp

function currentClock() { //Função pro relógio funcionar.
    const data = new Date()

    let currentyHour = data.getHours()
    let currentyMin = data.getMinutes()
    let currentySec = data.getSeconds()

    screenHours.textContent = 
        currentyHour < 10 ? '0'+ currentyHour : currentyHour
    screenMinutes.textContent = 
        currentyMin < 10 ? '0'+ currentyMin : currentyMin
    screenSeconds.textContent = 
        currentySec < 10 ? '0'+ currentySec : currentySec

    let currentyDay = data.getDate()
    let currentyMonth = data.getMonth() + 1
    let currentyYear = data.getFullYear()

    screenDay.textContent = 
        currentyDay <10 ? '0' + currentyDay : currentyDay

    screenMonth.textContent = 
        currentyMonth <10 ? '0' + currentyMonth : currentyMonth

    screenYear.textContent = 
    currentyYear <10 ? '0' + currentyYear : currentyYear


    if (alarmeOnOff == true) {
        if (data.getTime() >= alarmTime) {
            console.log('ok')
        }
    }
}

function alarmClock() {
    const data = new Date()
    let currentTimestamp = data.getTime()
    let valueInput = inputAlarm.value * 1000
    let alarmTime = valueInput + currentTimestamp
    let alarmHour = new Date(alarmTime)
    
    alarmHourScreen.innerHTML = 
        alarmHour.getHours() < 10 ? "0" + alarmHour.getHours() + ":" : alarmHour.getHours() + ':'

    alarmHourScreen.innerHTML += 
        alarmHour.getMinutes() < 10 ? "0" + alarmHour.getMinutes() + ':' : alarmHour.getMinutes() + ':'

    alarmHourScreen.innerHTML += 
        alarmHour.getSeconds() < 10 ? "0" + alarmHour.getSeconds() : alarmHour.getSeconds()
    
}


btnStart.addEventListener('click', () => {
    alarmeOnOff = true
    alarmClock()

})

btnStop.addEventListener('click', () => {
    alarmeOnOff = false
    alarmHourScreen.innerHTML = ''
    inputAlarm.value = ''
    inputAlarm.focus()
})


currentClock() //Função pro relógio iniciar ao abrir a página
setInterval(currentClock, 1000) //Intervalo para manter o relógio atualizado, fazendo o que a cada 1000 (1s), execute a função do relógio.
