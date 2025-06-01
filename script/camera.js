const camera = document.getElementById('camera');
const cenario = document.getElementById('cenario');
const character = document.getElementById('charcter');

let velocidade = 2;
let isWalking = false;
let currentDirection = 'down';
let sideDirection = 'right';

const keysPressed = { w: false, a: false, s: false, d: false };

// Posição do personagem no cenário (em px)
let charX = 0;
let charY = 0;

document.addEventListener('keydown', (e) => {
  if (e.key in keysPressed) keysPressed[e.key] = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key in keysPressed) keysPressed[e.key] = false;
});

function mover() {
  const isMoving = keysPressed.w || keysPressed.a || keysPressed.s || keysPressed.d;

  if (keysPressed.w) {
    charY -= velocidade;
    currentDirection = 'up';
  }
  if (keysPressed.s) {
    charY += velocidade;
    currentDirection = 'down';
  }
  if (keysPressed.a) {
    charX -= velocidade;
    currentDirection = 'side';
    sideDirection = 'left';
  }
  if (keysPressed.d) {
    charX += velocidade;
    currentDirection = 'side';
    sideDirection = 'right';
  }

  // Limitar para não sair do cenário (opcional)
  const maxX = cenario.offsetWidth - character.offsetWidth;
  const maxY = cenario.offsetHeight - character.offsetHeight;

  if (charX < 0) charX = 0;
  if (charY < 0) charY = 0;
  if (charX > maxX) charX = maxX;
  if (charY > maxY) charY = maxY;

  // Atualiza posição do personagem no cenário
  character.style.left = `${charX}px`;
  character.style.top = `${charY}px`;

  // Atualiza flip do personagem
  if (sideDirection === 'left') {
    character.querySelector('.flip-container').style.transform = 'scaleX(-1)';
  } else {
    character.querySelector('.flip-container').style.transform = 'scaleX(1)';
  }

  // Atualiza animação do personagem
  if (isMoving && !isWalking) {
    character.querySelector('.character-img').src = `./images/character-walk-${currentDirection}.gif?${Date.now()}`;
    isWalking = true;
  }
  if (!isMoving && isWalking) {
    character.querySelector('.character-img').src = `./images/character-idle-${currentDirection}.gif`;
    isWalking = false;
  }

  // Centraliza a câmera no personagem (move o cenário)
  const cameraCenterX = camera.offsetWidth / 2;
  const cameraCenterY = camera.offsetHeight / 2;

  // Calcula a posição do cenário para que o personagem fique centralizado
  let cenarioX = cameraCenterX - (charX + character.offsetWidth / 2);
  let cenarioY = cameraCenterY - (charY + character.offsetHeight / 2);

  // Limitar movimento do cenário para não mostrar além da borda
  const minCenarioX = camera.offsetWidth - cenario.offsetWidth;
  const minCenarioY = camera.offsetHeight - cenario.offsetHeight;

  if (cenarioX > 0) cenarioX = 0;
  if (cenarioY > 0) cenarioY = 0;
  if (cenarioX < minCenarioX) cenarioX = minCenarioX;
  if (cenarioY < minCenarioY) cenarioY = minCenarioY;

  cenario.style.left = `${cenarioX}px`;
  cenario.style.top = `${cenarioY}px`;

  requestAnimationFrame(mover);
}

mover();
