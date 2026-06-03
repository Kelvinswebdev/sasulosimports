const particles = document.querySelector('.particles');

for(let i = 0; i < 40; i++){

    const particle = document.createElement('span');

    const size = Math.random() * 12 + 4;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * 100 + '%';

    particle.style.animationDuration =
        Math.random() * 10 + 10 + 's';

    particle.style.animationDelay =
        Math.random() * 5 + 's';

    particles.appendChild(particle);
}