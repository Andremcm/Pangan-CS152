// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function applyStoredTheme() {
  const stored = localStorage.getItem('gp-theme') || 'light';
  if (stored === 'dark') body.classList.add('dark');
}
applyStoredTheme();

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('gp-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobile-nav-toggle');
const sidebar = document.getElementById('sidebar');

mobileToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Active section highlighting on scroll
const sections = document.querySelectorAll('.panel');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
