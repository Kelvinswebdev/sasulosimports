// services.js

const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-(y - rect.height / 2) / 25}deg)
      rotateY(${(x - rect.width / 2) / 25}deg)
      translateY(-10px)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `translateY(0px)`;
  });
});