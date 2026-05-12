// Shared nav helper
function initSidebar(activePage) {
  const nav = document.getElementById('nav-links');
  const pages = [
    { href: 'index.html', label: 'Sobre mim', icon: '👤' },
    { href: 'educacao.html', label: 'Educação', icon: '🎓' },
    { href: 'experiencia.html', label: 'Experiência', icon: '💼' },
    { href: 'voluntario.html', label: 'Voluntariado', icon: '🤝' },
    { href: 'contact.html', label: 'Contactos', icon: '📍' },
  ];
  nav.innerHTML = pages.map(p => `
    <li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">
      <span class="nav-icon">${p.icon}</span> ${p.label}
    </a></li>
  `).join('');

  // Hamburger
  const ham = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  ham.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !ham.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // Loader
  window.addEventListener('load', () => {
    document.getElementById('loader')?.classList.add('hidden');
  });
}
