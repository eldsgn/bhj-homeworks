const clickCounterElement = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let cookieWidth = Number(cookie.width);
let clickCounterValue = clickCounterElement.textContent;

// Функция подсчета кликов
cookie.onclick = function () {
    clickCounterValue = Number(clickCounterValue);
    clickCounterValue++;
    clickCounterElement.textContent = String(clickCounterValue);
    if(clickCounterValue % 2 !== 0) {
        cookieWidth += 10;
    } else {
        cookieWidth -= 10;
    }
    cookie.width = String(cookieWidth);
}
