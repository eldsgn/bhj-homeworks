const getHole = index => document.getElementById(`hole${index}`);
let score = 0;
let losses = 0;

function updateStatus() {
  document.getElementById('dead').innerText = score;
  document.getElementById('lost').innerText = losses;
}

// Обработчик клика
function onHoleClick(event) {
  const hole = event.target;
  if (hole.classList.contains('hole_has-mole')) {
    score++;
    if (score === 10) {
      alert('🏆 Вы победили! 🏆');
      score = 0;
      losses = 0;
    }
  } else {
    losses++;
    if (losses === 5) {
      alert('😖 Вы проиграли 😖');
      score = 0;
      losses = 0;
    }
  }

  updateStatus();
}

// Обработчик клика для каждой лунки
for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', onHoleClick);
}

// Функция запуска игры
function startGame() {
  score = 0;
  losses = 0;
  updateStatus();
  next();
}

startGame();
