// admin.js

document.getElementById('form-produto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const descricao = document.getElementById('descricao').value;
  const imagem = document.getElementById('imagem').value;

  const produto = { nome, preco, descricao, imagem, ativo: true };

  fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    method: 'POST',
    body: JSON.stringify(produto),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      alert('Produto salvo com sucesso!');
      location.reload();
    })
    .catch(err => alert('Erro ao salvar: ' + err));
});

window.onload = () => {
  fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=list')
    .then(res => res.json())
    .then(produtos => {
      const lista = document.getElementById('admin-lista-produtos');
      lista.innerHTML = '';
      produtos.forEach((p, i) => {
        const item = document.createElement('div');
        item.innerHTML = `
          <p><strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)}</p>
          <p>${p.descricao}</p>
          <button onclick="toggleProduto(${i})">${p.ativo ? 'Inativar' : 'Ativar'}</button>
          <hr>
        `;
        lista.appendChild(item);
      });
    });
};

function toggleProduto(index) {
  fetch(`https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=toggle&index=${index}`)
    .then(() => location.reload());
}
