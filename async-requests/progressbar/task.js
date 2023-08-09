document.getElementById('file').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        uploadFile(file);
    }
});

function uploadFile(file) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('file', file);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.onprogress = function(event) {
        const percentComplete = event.loaded / event.total;
        updateProgress(percentComplete);
    };

    xhr.onload = function() {
        if (xhr.status == 200) {
            alert('Файл успешно загружен');
        } else {
            alert('Ошибка при загрузке файла: ' + xhr.statusText);
        }
    };

    xhr.onerror = function() {
        alert('Ошибка при отправке файла.');
    };

    xhr.send(formData);
}

function updateProgress(percentage) {
    const progress = document.getElementById('progress');
    progress.value = percentage;
}
