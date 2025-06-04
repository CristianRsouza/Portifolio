let character = document.getElementById('charcter');
const character_colision = document.getElementById('character-colision');
const treesColision = document.querySelectorAll('.tree-colision');

let charX = 0;
let charY = 0;
const speed = 5;

function isRectsColliding(r1, r2) {
  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function getCharacterCollisionFutureRect(newX, newY) {
  const charRect = character.getBoundingClientRect();
  const colRect = character_colision.getBoundingClientRect();

  const offsetX = colRect.left - charRect.left;
  const offsetY = colRect.top - charRect.top;

  return {
    left: newX + offsetX,
    top: newY + offsetY,
    right: newX + offsetX + colRect.width,
    bottom: newY + offsetY + colRect.height,
  };
}

function willCollide(newX, newY) {
  const futureRect = getCharacterCollisionFutureRect(newX, newY);

  for (const tree of treesColision) {
    const treeRect = tree.getBoundingClientRect();
    if (isRectsColliding(futureRect, treeRect)) {
      return true;
    }
  }
  return false;
}

function mover(dx, dy) {
  const newX = charX + dx;
  const newY = charY + dy;

  if (!willCollide(newX, newY)) {
    charX = newX;
    charY = newY;
    character.style.left = charX + 'px';
    character.style.top = charY + 'px';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') mover(0, -speed);
  if (e.key === 'ArrowDown') mover(0, speed);
  if (e.key === 'ArrowLeft') mover(-speed, 0);
  if (e.key === 'ArrowRight') mover(speed, 0);
});
