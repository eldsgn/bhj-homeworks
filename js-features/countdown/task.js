const timer = document.getElementById('timer');
let timerValue = timer.textContent;

// Функция обратного отсчета
function startCountDown() {
    timerValue = Number(timerValue);

    function countDown() {
        timerValue--;
        if(timerValue >= 0) {
            timer.textContent = String(timerValue);
        } else {
            clearInterval(intervalId);
            alert('Вы победили в конкурсе!');
        }
    }
    const intervalId = setInterval(countDown, 1000);
}

startCountDown();