// Функция ротации текстовых блоков
function rotateAds(rotator) {
    const rotatorCases = rotator.querySelectorAll(".rotator__case");
    const activeCase = rotator.querySelector(".rotator__case_active");
    const currentIndex = Array.from(rotatorCases).indexOf(activeCase);
    const nextIndex = (currentIndex + 1) % rotatorCases.length;
  
    activeCase.classList.remove("rotator__case_active");
    rotatorCases[nextIndex].classList.add("rotator__case_active");
}
  
// Функция запуска ротации
function startRotator() {
    const rotators = document.querySelectorAll(".rotator");
    rotators.forEach((rotator) => {
        setInterval(() => {
        rotateAds(rotator);
        }, parseInt(rotator.dataset.speed) || 1000);
    });
}
  

startRotator();
  