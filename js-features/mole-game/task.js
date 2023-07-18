const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterHit = dead.textContent;
let counterMiss = lost.textContent;

holes.forEach((hole) => {
  hole.addEventListener('click', () => {
    if(hole.classList.contains('hole_has-mole')) {
        counterHit++;
        dead.textContent = counterHit;
        if(counterHit >= 10) {
            alert('🏆 Вы победили! 🏆');
            clearCounters();
        }
    } else {
        counterMiss++;
        lost.textContent = counterMiss;
        if(counterMiss >= 5) {
            alert('😖 Вы проиграли 😖');
            clearCounters();
        }
    }
  });
});

function clearCounters() {
    counterMiss = 0;
    counterHit = 0;
    dead.textContent = counterHit;
    lost.textContent = counterMiss;
}