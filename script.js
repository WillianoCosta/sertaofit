const produtos = [
  {
    id: 1,
    nome: 'Hipercalórico 3kg',
    preco: 102.00,
    imagem: 'hipercalorico_profit.png',
    descricao: 'Suplemento para ganho de massa e energia.',
    link: 'https://mpago.la/1jUrtJu' //Link real do mercado pago
  },
  {
    id: 2,
    nome: 'Creatina Max Titanium 300g',
    preco: 77.25,
    imagem: 'creatina_max.png',
    descricao: 'Aumenta força e desempenho físico.',
    link: 'https://mpago.li/1MNjXZ3' // Link real do Mercado Pago
  },
  {
    id: 3,
    nome: 'Pré-Treino FTW Diabo Verde 300g',
    preco: 87.30,
    imagem: 'pretreino_diaboverde.png',
    descricao: 'Explosão de energia e foco para os treinos.',
    link: 'https://mpago.li/1zD9DB2' //Link real do mercado pago
  },
];

const container = document.getElementById('lista-produtos');

function renderProdutos() {
  container.innerHTML = '';
  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'produto';

    const botao = produto.link
      ? `<a href="${produto.link}" target="_blank"><button>Comprar</button></a>`
      : `<button disabled>Indisponível</button>`;

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
      ${botao}
    `;

    container.appendChild(card);
  });
}

renderProdutos();
