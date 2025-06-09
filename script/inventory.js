window.addEventListener('DOMContentLoaded', () => {
  const inventory_bar = document.getElementById('inventory_bar');
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
      image: '🛠'
    }
  ];

  const initial_inventory = {
    0: items[0],
    1: items[1], 
  };

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

      // Evento para selecionar ferramenta
      tile.addEventListener('click', () => {
        currentTool = initial_inventory[i];
        console.log('Ferramenta atual:', currentTool);
      });
    }

    inventory_bar.appendChild(tile);
  }

  // Gerar as árvores do mundo
  gerarArvoresMundo();

  // Render inicial das árvores na posição 0,0 do cenário
  atualizarRenderArvores(0, 0);

  // Controle simples do jogador para teste
  document.addEventListener('keydown', (e) => {
    const speed = 10;
    if (e.key === 'ArrowRight') playerX += speed;
    if (e.key === 'ArrowLeft') playerX -= speed;
    if (e.key === 'ArrowUp') playerY -= speed;
    if (e.key === 'ArrowDown') playerY += speed;

    // Atualiza árvores renderizadas conforme posição (simula o cenario se movendo)
    atualizarRenderArvores(-playerX, -playerY);

    // Verifica colisões para causar dano se tiver a ferramenta certa
    verificarColisoesComArvores();

    console.log(`Posição do jogador: x=${playerX}, y=${playerY}`);
  });

});
