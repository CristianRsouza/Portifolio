const cenario = document.getElementById('cenario');
const widthScreen = cenario.clientWidth;
const heightScreen = cenario.clientHeight;

 
const cols = 3;
const rows = 2;
const jitter = 200;
const treeWidth = 100;
const treeHeight = 150;

const spacingX = widthScreen / cols;
const spacingY = heightScreen / rows;

let id = 0;

 
function createTreeElement(x, y) {
  const treeContainer = document.createElement('div');
  treeContainer.classList.add('container-tree');
  treeContainer.style.position = 'absolute';
  treeContainer.style.left = `${x}px`;
  treeContainer.style.top = `${y}px`;
  treeContainer.style.zIndex = Math.floor(y);  

  treeContainer.innerHTML = `
    <div class="tree-colision" id="tree-colision-${id}" ></div>
    <img class="tree" src="../images/tree.png" alt="Tree" width="${treeWidth}" height="${treeHeight}" />
    <div class="tree-shadow"></div>
  `;

  cenario.appendChild(treeContainer);
}

 
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const baseX = col * spacingX;
    const baseY = row * spacingY;

    const jitterX = (Math.random() - 0.5) * jitter;
    const jitterY = (Math.random() - 0.5) * jitter;

    const x = baseX + jitterX;
    const y = baseY + jitterY;

    createTreeElement(x, y);
    id++;
  }
}
 
for (let i = 1; i <= 4; i++) {
  createTree(i);
}
