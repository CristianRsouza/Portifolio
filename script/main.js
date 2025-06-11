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
  let charY = 500;

  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() in keysPressed) keysPressed[e.key.toLowerCase()] = true;
  });

  document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() in keysPressed) keysPressed[e.key.toLowerCase()] = false;
  });

  function isCollidingWithAnyTree() {
    const charBox = document.getElementById('character-colision').getBoundingClientRect();
    const treeBoxes = document.querySelectorAll('.tree-colision');

    for (let tree of treeBoxes) {
      const treeBox = tree.getBoundingClientRect();

      const isColliding =
        charBox.right > treeBox.left &&
        charBox.left < treeBox.right &&
        charBox.bottom > treeBox.top &&
        charBox.top < treeBox.bottom;

      if (isColliding) return true;
    }

    return false;
  }

  function expandirCenarioSeNecessario() {
    const margem = 200;
    const buffer = 1000;

    const direita = charX + character.offsetWidth;
    const inferior = charY + character.offsetHeight;

    if (direita > cenario.offsetWidth - margem) {
      cenario.style.width = (cenario.offsetWidth + buffer) + 'px';
    }
    if (inferior > cenario.offsetHeight - margem) {
      cenario.style.height = (cenario.offsetHeight + buffer) + 'px';
    }

    if (charX < margem) {
      charX += buffer;
      cenario.style.width = (cenario.offsetWidth + buffer) + 'px';
      cenario.style.left = (parseInt(cenario.style.left || 0) - buffer) + 'px';
    }
    if (charY < margem) {
      charY += buffer;
      cenario.style.height = (cenario.offsetHeight + buffer) + 'px';
      cenario.style.top = (parseInt(cenario.style.top || 0) - buffer) + 'px';
    }
  }

  function estaPertoDoTronco(playerRect, treeRect) {
    const troncoY = treeRect.top + treeRect.height / 2;
    const troncoHeight = treeRect.height / 2;

    return (
      playerRect.left < treeRect.right &&
      playerRect.right > treeRect.left &&
      playerRect.top < troncoY + troncoHeight &&
      playerRect.bottom > troncoY
    );
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'e') {
      const playerRect = character.getBoundingClientRect();
      const todasArvores = document.querySelectorAll('.tree-colision');

      let cortou = false;

      todasArvores.forEach((domTree) => {
        const treeRect = domTree.getBoundingClientRect();
        const id = Number(domTree.dataset.treeId?.replace('tree-colision-', ''));

        const tree = arvores.find(t => t.id === id);
        if (!tree || tree.vida <= 0) return;

        if (estaPertoDoTronco(playerRect, treeRect)) {
          destroyTree(currentTool, charX, charY);
          cortou = true;
        }
      });

      if (!cortou) {
      }
    }
  });

function mover() {
  expandirCenarioSeNecessario();

  const isMoving = keysPressed.w || keysPressed.a || keysPressed.s || keysPressed.d;

  const prevX = charX;
  const prevY = charY;

  if (keysPressed.w) { charY -= velocidade; currentDirection = 'up'; }
  if (keysPressed.s) { charY += velocidade; currentDirection = 'down'; }
  if (keysPressed.a) { charX -= velocidade; currentDirection = 'side'; sideDirection = 'left'; }
  if (keysPressed.d) { charX += velocidade; currentDirection = 'side'; sideDirection = 'right'; }

  character.style.left = charX + 'px';
  character.style.top = charY + 'px';

  if (isCollidingWithAnyTree()) {
    charX = prevX;
    charY = prevY;
    character.style.left = charX + 'px';
    character.style.top = charY + 'px';
  }

 // vira personagem
characterImg.style.transform = sideDirection === 'left' ? 'scaleX(-1)' : 'scaleX(1)';

// Exemplo para virar horizontalmente mantendo escala e rotação
tool.style.transform = sideDirection === 'left' 
  ? 'scaleX(1) scale(3) rotate(-40deg)' 
  : 'scaleX(-1) scale(3) rotate(-40deg)';


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

    atualizarRenderArvores(cenarioX, cenarioY);

    requestAnimationFrame(mover);
  }

  gerarArvoresMundo();
  mover();
});
