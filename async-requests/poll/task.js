document.addEventListener('DOMContentLoaded', function() {
    // Загрузка опроса
    function loadPoll() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
      
      xhr.onload = function() {
        if (this.status == 200) {
          var response = JSON.parse(this.responseText);
          displayPoll(response.data);
        } else {
          console.error('Ошибка загрузки опроса:', this.status, this.statusText);
        }
      };
      
      xhr.onerror = function() {
        console.error('Ошибка сети');
      };
      
      xhr.send();
    }
    
    // Отображение опроса
    function displayPoll(data) {
      var titleElement = document.getElementById('poll__title');
      var answersElement = document.getElementById('poll__answers');
      
      titleElement.textContent = data.title;
      
      answersElement.innerHTML = '';
      data.answers.forEach(answer => {
        var btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = answer;
        btn.onclick = function() {
          alert('Спасибо, ваш голос засчитан!');
        };
        answersElement.appendChild(btn);
      });
    }
    
    loadPoll();
  });
  