let loader = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

// Обработка состояния запроса
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Скрываем лоадер
        loader.classList.remove('loader_active');

        // Парсим JSON
        let data = JSON.parse(xhr.responseText);
        let currencies = data.response.Valute;

        // Для каждой валюты создаем элемент
        for (let code in currencies) {
            let currency = currencies[code];
            
            // HTML-шаблон для каждой валюты
            let currencyElement = `
                <div class="item">
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>`;
            
            items.insertAdjacentHTML('beforeend', currencyElement);
        }
    }
}

xhr.send();
