const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
}));

const layers = document.querySelectorAll('.layer-item');
layers.forEach((layer) => layer.addEventListener('click', () => {
  layers.forEach((item) => item.classList.remove('active'));
  layer.classList.add('active');
  document.querySelector('.mini-bottle').dataset.selected = layer.dataset.layer;
}));

const flow = document.querySelector('.flow-button');
flow.addEventListener('click', () => {
  const active = flow.getAttribute('aria-pressed') === 'true';
  flow.setAttribute('aria-pressed', String(!active));
  document.querySelector('.explorer-visual').classList.toggle('is-flowing', !active);
  flow.innerHTML = active ? '<span class="play-icon">▶</span> Ver recorrido del agua' : '<span class="play-icon">✓</span> Detener recorrido';
});
