const character = document.getElementById('charcter');

function updateDepth() {
  const charY = character.offsetTop + character.offsetHeight;

  let maxTreeZIndexBehind = 0;

  document.querySelectorAll('.container-tree').forEach(tree => {
    const treeY = tree.offsetTop + tree.offsetHeight;
    tree.style.zIndex = Math.floor(treeY);

    if (treeY < charY && treeY > maxTreeZIndexBehind) {
      maxTreeZIndexBehind = treeY;
    }
  });

  // Coloca personagem à frente das árvores que estão atrás dele
  character.style.zIndex = Math.floor(maxTreeZIndexBehind) + 1;
}

// Chame updateDepth sempre que o personagem ou as árvores mudarem de posição
document.addEventListener('keydown', (e) => {
  // lógica de movimento...

  updateDepth();
});
