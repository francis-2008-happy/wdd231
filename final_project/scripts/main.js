// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.getElementById('navigation');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.navigation a');
    
    // Toggle mobile menu
    function toggleMenu() {
        navigation.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Change hamburger icon
        if (navigation.classList.contains('active')) {
            menuButton.innerHTML = '✕';
            menuButton.setAttribute('aria-expanded', 'true');
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            menuButton.innerHTML = '☰';
            menuButton.setAttribute('aria-expanded', 'false');
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }
    
    // Close mobile menu
    function closeMenu() {
        navigation.classList.remove('active');
        overlay.classList.remove('active');
        menuButton.innerHTML = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    menuButton.addEventListener('click', toggleMenu);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navigation.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navigation.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = currentYear;
    }
    
    // Set last modified date
    const lastModified = document.getElementById('last-modified');
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
    
    // Add accessibility improvements
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.setAttribute('aria-expanded', 'false');
    
    // Add smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

