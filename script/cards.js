const card = document.getElementById('card');

function showCard(prop) {
  card.style.top = '100%';

    if (prop === 'Who') {
    card.innerHTML = `
      <h1>Quem sou eu?</h1>
      <br>
      <p>
        Sou um programador de 17 anos, apaixonado por tecnologia.<br><br>
        Adoro passar meu tempo na academia — ela me ajuda a manter o foco e a disciplina. Quando estou me sentindo sem forças, lá lembro o quanto sou forte.<br><br>
        A todo momento, estou ouvindo música. Ela me mantém concentrado e desperta minha criatividade.<br><br>
        <em>"Você deve entender que há mais de um caminho para o topo da montanha."</em><br>
        — Miyamoto Musashi
      </p>
      <div id="close">X</div>
    `;
  } else if (prop === 'What') {
    card.innerHTML = `
      <h1>O que eu já fiz?</h1>
      <br>
      <p>
        Desde que comecei a programar, me aventurei em várias áreas como desenvolvimento Front-end, Back-end e, atualmente, Cibersegurança.<br><br>
        Durante 6 meses, estagiei em uma empresa de suplementos, onde tive grande participação na criação do site e na automação de tabelas utilizando JavaScript.<br><br>
        Hoje, estou desenvolvendo o Back-end de uma empresa chamada SpacyLaxy, onde trabalho remotamente.<br><br>
        Caso queira ver meus projetos, acesse meu <a href="https://github.com/CristianRsouza" target="_blank" rel="noopener noreferrer">GitHub</a>.<br><br>
      </p>
      <div id="close">X</div>
    `;
  } else if (prop === 'Knowledge') {
    card.innerHTML = `
      <h1>O que eu sei fazer?</h1>
      <br>
      <p>
        Tenho experiência com várias linguagens e tecnologias, tanto no front-end quanto no back-end:<br><br>

        <strong>Linguagens:</strong> JavaScript, TypeScript, Python, Java, C, C++, SQL<br>
        <strong>Frameworks e bibliotecas:</strong> React, Vue.js, NestJS, Spring Boot<br>
        <strong>Outras tecnologias:</strong> Docker, Git<br>
        <strong>Idiomas:</strong> Inglês (intermediário/avançado)<br><br>

        Estou sempre aprendendo algo novo, buscando melhorar meu código e entender como as coisas funcionam por trás.
      </p>
      <div id="close">X</div>
    `;
  } else if (prop === 'History') {
    card.innerHTML = `
      <h1>Minha jornada</h1>
      <br>
      <p>
        Minha história na programação começou cedo — aos 11 anos.<br><br>
        Tudo teve início com o Game Maker, quando eu tentava dar vida aos meus próprios jogos.<br><br>
        Desde então, algo acendeu dentro de mim — um fogo criativo que nunca mais apagou. Com o tempo, fui deixando de apenas montar jogos e comecei a explorar o que estava por trás das interfaces: como funcionam os sistemas, como os dados trafegam, como as aplicações ganham vida.<br><br>
        Aprendi linguagens como JavaScript, TypeScript, Python, Java e C++, e me aprofundei em frameworks como React, Vue, NestJS e Spring Boot. E este é só o começo da minha história.<br><br>
        Hoje, programar não é apenas algo que faço. É parte de quem sou.<br><br>
        <em>"Você pode apenas vencer alguém se tiver dominado sua própria mente."</em><br>
        — Miyamoto Musashi
      </p>
      <div id="close">X</div>
    `;
  } else if (prop === 'Contato') {
    card.innerHTML = `
      <h1>Contato</h1>
      <br>
      <p>
        Caso você tenha se interessado pelo meu trabalho, ficarei feliz em conversar com você!<br><br>
        Aqui estão minhas redes para contato: <br><br>
        📧 Email: <a href="mailto:cristianrodriguesouza@gmail.com">cristianrodriguesouza@gmail.com</a><br>
        🔗 <a href="https://github.com/CristianRsouza" target="_blank" rel="noopener noreferrer">GitHub</a><br>
        🔗 <a href="https://www.linkedin.com/in/cristian-rodrigues-548ab4250/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br>
        🔗 <a href="https://www.instagram.com/cris.rodsz/" target="_blank" rel="noopener noreferrer">Instagram</a><br>
        🔗 <a href="https://x.com/CristianRodSz" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
      <div id="close">X</div>
    `;
  }

  const closeButton = document.getElementById('close');
  if (closeButton) {
    closeButton.addEventListener('click', closeCard);
  }
}

function closeCard() {
  card.style.top = '200%';
}
