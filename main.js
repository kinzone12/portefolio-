/* ============================================
   PORTFOLIO - JavaScript Interactions
   ============================================ */

// ============================================
// Navigation Active Link
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Fonction pour mettre à jour le lien actif
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Écouter le scroll
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Appel initial

    // ============================================
    // Smooth Scroll pour les liens de navigation
    // ============================================

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Gestion du formulaire de contact
    // ============================================

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Validation email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Veuillez entrer une adresse email valide');
                return;
            }
            
            // Simuler l'envoi (remplacer par une vraie API)
            console.log('Formulaire soumis:', {
                name,
                email,
                subject,
                message
            });
            
            // Message de succès
            alert('Merci ! Votre message a été envoyé avec succès.');
            contactForm.reset();
        });
    }

    // ============================================
    // Animations au scroll
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec animation
    sections.forEach(section => {
        observer.observe(section);
    });

    // ============================================
    // Effet de hover sur les cartes de projet
    // ============================================

    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease-out';
        });
    });

    // ============================================
    // Gestion du menu mobile (optionnel)
    // ============================================

    // Vous pouvez ajouter un menu hamburger ici si nécessaire
    // pour améliorer l'expérience mobile

    // ============================================
    // Scroll vers le haut au clic sur le logo
    // ============================================

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ============================================
// Fonction utilitaire pour débouncer
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Gestion du redimensionnement de la fenêtre
// ============================================

const handleResize = debounce(function() {
    console.log('Fenêtre redimensionnée');
}, 250);

window.addEventListener('resize', handleResize);
