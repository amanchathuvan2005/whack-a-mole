const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');

let score = 0;
let activeMole = null;
let gameInterval;

function showRandomMole() {
  
  moles.forEach(mole => mole.classList.remove('active'));

  
  const randomIndex = Math.floor(Math.random() * moles.length);
  const randomMole = moles[randomIndex];

  
  randomMole.classList.add('active');
  activeMole = randomMole;
}


function whackMole(e) {
  if (e.target.classList.contains('active')) {
    score++;
    scoreDisplay.textContent = score;
    e.target.classList.remove('active'); 
  }
}


function startGame() {
  score = 0;
  scoreDisplay.textContent = score;

  
  clearInterval(gameInterval);

  
  gameInterval = setInterval(showRandomMole, 400);
}


function restartGame() {
  clearInterval(gameInterval);
  moles.forEach(mole => mole.classList.remove('active'));
  startGame();
}


moles.forEach(mole => mole.addEventListener('click', whackMole));
restartBtn.addEventListener('click', restartGame);


startGame();
