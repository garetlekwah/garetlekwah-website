const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.backgroundColor = '#e0f7fa';
    setTimeout(() => { card.style.backgroundColor = '#fff'; }, 500);
  });
});
