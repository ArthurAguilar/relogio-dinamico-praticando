screenHours = document.querySelector('#hours')
screenMinutes = document.querySelector('#minutes')
screenSeconds = document.querySelector('#seconds')

screenDay = document.querySelector('.day')
screenMonth = document.querySelector('.month')
screenYear = document.querySelector('.year')

function currentClock() {
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
}

currentClock()

setInterval(currentClock, 1000)