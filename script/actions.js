var currentTool;

function getCurrentTool(tool) {
  currentTool = tool;
}

function getCurrentPosition(x, y) {
}
function destroyTree(tool, playerX, playerY) {
  if (!tool || tool.name !== 'axe') {
    return;
  }

  const tree = getClosestTreeEvent(playerX, playerY);
  if (!tree) return;

  const treeImg = tree.domElement.querySelector('img.tree');

  if (treeImg) {
    treeImg.classList.add('tree-hit-flash', 'tree-shake');
    setTimeout(() => {
      treeImg.classList.remove('tree-hit-flash', 'tree-shake');
    }, 200);
  }


  tree.vida -= tool.damage;

  if (tree.vida <= 0) {
    removerElementoArvore(tree);
    const index = arvores.findIndex(a => a.id === tree.id);
    if (index !== -1) arvores.splice(index, 1);
  }
}