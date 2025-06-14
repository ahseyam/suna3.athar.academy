// إدارة عداد السلة
document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cartCount');
    
    // دالة لتحديث عداد السلة
    function updateCartCount(count) {
        if (cartCount) {
            cartCount.textContent = count;
            
            // إظهار أو إخفاء العداد حسب العدد
            if (count > 0) {
                cartCount.classList.add('show');
            } else {
                cartCount.classList.remove('show');
            }
        }
    }
    
    // تحديث العداد عند تحميل الصفحة
    const currentCount = localStorage.getItem('cartCount') || 0;
    updateCartCount(parseInt(currentCount));
    
    // دالة لإضافة عنصر للسلة
    window.addToCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartCount', cart.length);
        updateCartCount(cart.length);
    };
    
    // دالة لإزالة عنصر من السلة
    window.removeFromCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(id => id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartCount', cart.length);
        updateCartCount(cart.length);
    };
    
    // دالة لمسح السلة
    window.clearCart = function() {
        localStorage.removeItem('cart');
        localStorage.setItem('cartCount', 0);
        updateCartCount(0);
    };
});

