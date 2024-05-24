let hours = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let timer;
let startBtn = document.getElementById("str");
let stopBtn = document.getElementById("stp");
let reBtn = document.getElementById("reset")

function start() {
    timer = setInterval(() => {
        millisec++;
        if (millisec >= 100) {
            sec++;
            millisec = 0;
        }
        if (sec >= 60) {
            min++;
            sec = 0;
        }
        if (min >= 60) {
            hours++;
            min = 0;
        }
        document.getElementById("watch").innerHTML = `<h1>${hours}: ${min}: ${sec}: ${millisec}</h1>`;
    }, 10);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    location.reload()
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop); 
reBtn.addEventListener("click", reset); 
