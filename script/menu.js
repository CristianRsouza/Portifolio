const menu = document.getElementById('menu-inicial');
const botaoIniciar = document.getElementById('botao-iniciar');

if (botaoIniciar && menu) {
  botaoIniciar.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.classList.add('sunrise');

    // Talvez esse setTimeout não seja necessário se você já escondeu o menu
    const menuBox = document.querySelector('.menu-box');
    if (menuBox) {
      setTimeout(() => {
        menuBox.style.display = 'none';
      }, 6000);
    }
  });
}
