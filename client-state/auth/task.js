document.addEventListener('DOMContentLoaded', function() {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        document.querySelector('#user_id').textContent = storedUserId;
        document.querySelector('.signin').classList.remove('signin_active');
        document.querySelector('.welcome').classList.add('welcome_active');
    }

    // Авторизация
    document.querySelector('#signin__btn').addEventListener('click', function(event) {
        event.preventDefault();

        let formData = new FormData(document.querySelector('#signin__form'));
        
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response);
                
                if (data.success) {
                    localStorage.setItem('user_id', data.user_id);
                    document.querySelector('#user_id').textContent = data.user_id;
                    document.querySelector('.signin').classList.remove('signin_active');
                    document.querySelector('.welcome').classList.add('welcome_active');
                } else {
                    alert('Неверный логин/пароль');
                }
            } else {
                alert('Ошибка сервера');
            }
        };

        xhr.onerror = function() {
            console.error('Ошибка при авторизации:', this.response);
            alert('Ошибка при авторизации');
        };

        xhr.send(formData);
    });
});
