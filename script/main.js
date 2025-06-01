window.addEventListener('DOMContentLoaded', () => {
  const camera = document.getElementById('camera');
  const cenario = document.getElementById('cenario');
  const character = document.getElementById('charcter');
  const characterImg = character.querySelector('.character-img');

  let velocidade = 5;
  let isWalking = false;
  let currentDirection = 'down';
  let sideDirection = 'right';

  const keysPressed = { w: false, a: false, s: false, d: false };

  let charX = 900;
  let charY = 700;

  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() in keysPressed) keysPressed[e.key.toLowerCase()] = true;
  });

  document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() in keysPressed) keysPressed[e.key.toLowerCase()] = false;
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

    const maxX = cenario.offsetWidth - character.offsetWidth;
    const maxY = cenario.offsetHeight - character.offsetHeight;

    if (charX < 0) charX = 0;
    if (charY < 0) charY = 0;
    if (charX > maxX) charX = maxX;
    if (charY > maxY) charY = maxY;

    character.style.left = charX + 'px';
    character.style.top = charY + 'px';

    if (sideDirection === 'left') {
      characterImg.style.transform = 'scaleX(-1)';
    } else {
      characterImg.style.transform = 'scaleX(1)';
    }

    if (isMoving && !isWalking) {
      characterImg.src = `./images/character-walk-${currentDirection}.gif?${Date.now()}`;
      isWalking = true;
    }
    if (!isMoving && isWalking) {
      characterImg.src = `./images/character-idle-${currentDirection}.gif`;
      isWalking = false;
    }

    const cameraCenterX = camera.offsetWidth / 2;
    const cameraCenterY = camera.offsetHeight / 2;

    let cenarioX = cameraCenterX - (charX + character.offsetWidth / 2);
    let cenarioY = cameraCenterY - (charY + character.offsetHeight / 2);

    const minCenarioX = camera.offsetWidth - cenario.offsetWidth;
    const minCenarioY = camera.offsetHeight - cenario.offsetHeight;

    if (cenarioX > 0) cenarioX = 0;
    if (cenarioY > 0) cenarioY = 0;
    if (cenarioX < minCenarioX) cenarioX = minCenarioX;
    if (cenarioY < minCenarioY) cenarioY = minCenarioY;

    cenario.style.left = cenarioX + 'px';
    cenario.style.top = cenarioY + 'px';

    requestAnimationFrame(mover);
  }

  mover();
});
