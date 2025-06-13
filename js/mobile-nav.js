// Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavClose = document.getElementById('mobileNavClose');

    // Open mobile navigation
    function openMobileNav() {
        mobileNavOverlay.classList.add('active');
        mobileNavMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close mobile navigation
    function closeMobileNav() {
        mobileNavOverlay.classList.remove('active');
        mobileNavMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', openMobileNav);
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    // Close on link click
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Update cart count
    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCount = document.getElementById('cartCount');
        const mobileCartCount = document.getElementById('mobileCartCount');
        
        if (cartCount) cartCount.textContent = totalItems;
        if (mobileCartCount) mobileCartCount.textContent = totalItems;
    }

    // Initialize cart count
    updateCartCount();

    // Listen for cart updates
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
});

// Toggle mobile dropdown
function toggleMobileDropdown(element) {
    const dropdown = element.parentElement;
    const isActive = dropdown.classList.contains('active');
    
    // Close all other dropdowns
    const allDropdowns = document.querySelectorAll('.mobile-nav-dropdown');
    allDropdowns.forEach(dd => dd.classList.remove('active'));
    
    // Toggle current dropdown
    if (!isActive) {
        dropdown.classList.add('active');
    }
}

