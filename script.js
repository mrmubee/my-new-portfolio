// Mobile menu toggle with animation
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('menu-animate');
});

// Navbar shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Dark mode toggle
const themeToggleBtns = document.querySelectorAll('.theme-toggle');
function setDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark'));
  });
});
// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Animate cards on scroll (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .project-card, .testimonial-card, .skill-item').forEach(el => {
  observer.observe(el);
});

// Example CSS for animation (add to your style.css):
// .menu-animate { animation: slideDown 0.3s; }
// @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
// .fade-in { opacity: 1 !important; transform: none !important; transition: opacity 0.6s, transform 0.6s; }
// .card, .project-card, .testimonial-card, .skill-item { opacity: 0; transform: translateY(30px); }
