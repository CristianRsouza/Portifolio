window.addEventListener('DOMContentLoaded', () => {
  const inventory_bar = document.getElementById('inventory_bar');
  const tool = document.getElementById('tool');
  const inventory_tiles = 5;

  const items = [
    {
      id: 1,
      name: 'axe',
      damage: 50,
      image: '🪓'
    },
    {
      id: 2,
      name: 'table',
      damage: 0,
      image: '✨'
    }
  ];

  const initial_inventory = {
    0: items[0],
    1: items[1],
  };

  let currentTool = null;
  let playerX = 0;
  let playerY = 0;

  for (let i = 0; i <= inventory_tiles; i++) {
    const tile = document.createElement('div');
    tile.className = 'bar_inventory';
    tile.id = `bar_inventory_${i}`;

    const slotContent = document.createElement('div');
    slotContent.className = 'slot';
    slotContent.textContent = i;
    tile.appendChild(slotContent);

    if (initial_inventory[i]) {
      const icon = document.createElement('div');
      icon.className = 'item-icon';
      icon.textContent = initial_inventory[i].image;
      tile.appendChild(icon);

      tile.addEventListener('click', () => {
        currentTool = initial_inventory[i];
        tool.textContent = currentTool.image;
        console.log('Ferramenta atual:', currentTool);
        getCurrentTool(currentTool)
      });
    }

    inventory_bar.appendChild(tile);
  }

  gerarArvoresMundo();

  atualizarRenderArvores(0, 0);

  document.addEventListener('keydown', (e) => {
    const speed = 10;
    if (e.key === 'ArrowRight') playerX += speed;
    if (e.key === 'ArrowLeft') playerX -= speed;
    if (e.key === 'ArrowUp') playerY -= speed;
    if (e.key === 'ArrowDown') playerY += speed;

    atualizarRenderArvores(-playerX, -playerY);

    if (e.key === ' ') {
      destroyTree(currentTool, playerX, playerY);
    }

    console.log(`Posição do jogador: x=${playerX}, y=${playerY}`);
  });
});
