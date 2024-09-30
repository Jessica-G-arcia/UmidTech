// Adicione um evento de clique ao botão "Saiba mais"
document.querySelector('.cartao button').addEventListener('click', function() {
  // Adicione uma classe para girar o cartão
  document.querySelector('.cartao').classList.toggle('girar');
});