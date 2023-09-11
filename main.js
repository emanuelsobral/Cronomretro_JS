const HourTimer = document.getElementById('Hora');
const minuteTimer = document.getElementById('Minuto');
const SecondTimer = document.getElementById('Segundos');
const MillisecondTimer = document.getElementById('Milisegundos');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cronometro;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');

start.addEventListener('click', function() {
    cronometro = setInterval(() => { timer(); }, 10); 
    pause.style.backgroundColor = '#4E4FEB'
});

pause.addEventListener('click', function() {
    clearInterval(cronometro);
    pause.style.backgroundColor = 'red';
});

restart.addEventListener('click', function() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    HourTimer.innerHTML = '00';
    minuteTimer.innerHTML = '00';
    SecondTimer.innerHTML = '00';
    MillisecondTimer.innerHTML = '000';

    pause.style.backgroundColor = '#4E4FEB'
});

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    
    HourTimer.innerText = returnData(hour)
    minuteTimer.innerText = returnData(minute);
    SecondTimer.innerText = returnData(second);
    MillisecondTimer.innerText = returnData(millisecond);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

