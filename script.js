// Change Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Simple Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form.');
});

// Smooth Scroll for Button
document.getElementById('cta-btn').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});