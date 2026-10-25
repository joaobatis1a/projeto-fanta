const hero = document.querySelector('.hero');
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Parallax leve nos elementos do hero conforme o mouse
const layers = [
    { el: document.getElementById('fanta'), speed: 15 },
    { el: document.getElementById('laranja'), speed: 30 },
    { el: document.getElementById('laranja-cortada'), speed: 25 },
];

hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    layers.forEach(({ el, speed }) => {
        el.style.translate = `${x * speed}px ${y * speed}px`;
    });
});

hero.addEventListener('mouseleave', () => {
    layers.forEach(({ el }) => { el.style.translate = ''; });
});

// Menu mobile
menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.addEventListener('click', () => navMenu.classList.remove('open'));

// Revela os cards ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach((card) => observer.observe(card));
