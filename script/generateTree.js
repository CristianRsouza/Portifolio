const cenario = document.getElementById('cenario');
const widthScreen = cenario.clientWidth;
const heightScreen = cenario.clientHeight;

const treeWidthBase = 100;
const treeHeightBase = 150;
const sizeVariation = 0.3;

const spacingX = 480;
const spacingY = 380;
const jitter = 500;

const margemRender = 600;
const mundoWidth = 8000; 
const mundoHeight = 6000;  

let id = 0;

const arvores = [];

function criarElementoArvore(tree) {
  if (tree.domElement) return;

  const treeContainer = document.createElement('div');
  treeContainer.classList.add('container-tree');
  treeContainer.style.position = 'absolute';
  treeContainer.style.left = `${tree.x}px`;
  treeContainer.style.top = `${tree.y}px`;
  treeContainer.style.zIndex = Math.floor(tree.y);

  treeContainer.innerHTML = `
    <div class="tree-colision" id="tree-colision-${tree.id}" data-tree-id="${tree.id}"></div>
    <img class="tree" src="../Portifolio/images/tree.png" alt="Tree" width="${tree.width}" height="${tree.height}" />
    <div class="tree-shadow"></div>
    <div class="tree-event" data-id="${tree.id}"></div>
  `;

  cenario.appendChild(treeContainer);
  tree.domElement = treeContainer;
}

function removerElementoArvore(tree) {
  if (!tree.domElement) return;
  cenario.removeChild(tree.domElement);
  tree.domElement = null;
}

function gerarArvoresMundo() {
  const cols = Math.ceil(mundoWidth / spacingX);
  const rows = Math.ceil(mundoHeight / spacingY);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (Math.random() > 0.5) continue;

      const x = col * spacingX + (Math.random() - 0.5) * jitter;
      const y = row * spacingY + (Math.random() - 0.5) * jitter;

      const scale = 1 + (Math.random() * sizeVariation * 2 - sizeVariation);
      const width = treeWidthBase * scale;
      const height = treeHeightBase * scale;

      arvores.push({
        id: id++,
        x,
        y,
        width,
        height,
        vida: 100,
        domElement: null
      });
    }
  }
}
function getClosestTreeEvent(playerX, playerY, maxDistance = 250) {
  let arvoreMaisProxima = null;
  let menorDistancia = maxDistance;

  for (const tree of arvores) {
    if (!tree.domElement || tree.vida <= 0) continue;

    const treeBaseX = tree.x + tree.width / 2;
    const treeBaseY = tree.y + tree.height; // base da árvore, não o centro

    const dx = treeBaseX - playerX;
    const dy = treeBaseY - playerY;
    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia < menorDistancia) {
      menorDistancia = distancia;
      arvoreMaisProxima = tree;
    }
  }

  return arvoreMaisProxima;
}

function estaPertoDoTronco(playerRect, treeRect) {
  const troncoY = treeRect.top + treeRect.height / 2;
  const troncoHeight = treeRect.height / 2;

  const horizontalDist = Math.abs((playerRect.left + playerRect.width / 2) - (treeRect.left + treeRect.width / 2));
  const maxHorizontalDistance = 100; // ajuste conforme necessário

  return (
    horizontalDist <= maxHorizontalDistance &&
    playerRect.left < treeRect.right &&
    playerRect.right > treeRect.left &&
    playerRect.top < troncoY + troncoHeight &&
    playerRect.bottom > troncoY
  );
}


function atualizarRenderArvores(cenarioX, cenarioY) {
  const areaVisivel = {
    left: -cenarioX - margemRender,
    top: -cenarioY - margemRender,
    right: -cenarioX + widthScreen + margemRender,
    bottom: -cenarioY + heightScreen + margemRender,
  };

  for (const tree of arvores) {
    const estaNaArea =
      tree.x + tree.width > areaVisivel.left &&
      tree.x < areaVisivel.right &&
      tree.y + tree.height > areaVisivel.top &&
      tree.y < areaVisivel.bottom;

    if (estaNaArea) {
      criarElementoArvore(tree);
    } else {
      removerElementoArvore(tree);
    }
  }
}
