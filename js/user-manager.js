// استعادة JavaScript الأصلي الجميل
// بناءً على التحليل من الرابط: https://hvhpnnud.manus.space

class UserManager {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.init();
    }

    init() {
        // تهيئة الأحداث
        this.setupEventListeners();
        
        // تحديث واجهة المستخدم
        this.updateUI();
        
        console.log('تم تحميل أكاديمية صُنَّاع الأثَر بنجاح!');
    }

    setupEventListeners() {
        // أحداث أزرار المصادقة
        const loginBtn = document.querySelector('.login-btn');
        const registerBtn = document.querySelector('.register-btn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
        
        if (registerBtn) {
            registerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleRegister();
            });
        }

        // أحداث البحث
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            searchBox.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // أحداث أزرار البرامج
        const programBtns = document.querySelectorAll('.program-btn');
        programBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleProgramClick(e.target);
            });
        });

        // أحداث القائمة الرئيسية
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNavigation(e.target);
            });
        });
    }

    handleLogin() {
        // محاكاة تسجيل الدخول
        this.isLoggedIn = true;
        this.currentUser = {
            name: 'Test User',
            email: 'test@example.com',
            role: 'طالب'
        };
        
        this.updateUI();
        this.showNotification('تم تسجيل الدخول بنجاح!', 'success');
    }

    handleRegister() {
        // محاكاة التسجيل
        this.showNotification('سيتم توجيهك لصفحة التسجيل...', 'info');
        
        // محاكاة التسجيل التلقائي
        setTimeout(() => {
            this.handleLogin();
        }, 1500);
    }

    handleSearch(query) {
        if (query.length > 2) {
            console.log('البحث عن:', query);
            // هنا يمكن إضافة منطق البحث الفعلي
        }
    }

    handleProgramClick(button) {
        const card = button.closest('.program-card');
        const title = card.querySelector('.program-title').textContent;
        
        this.showNotification(`سيتم توجيهك لتفاصيل ${title}...`, 'info');
    }

    handleNavigation(link) {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        
        // إزالة الفئة النشطة من جميع الروابط
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // إضافة الفئة النشطة للرابط المحدد
        link.classList.add('active');
        
        this.showNotification(`تم الانتقال إلى ${text}`, 'info');
    }

    updateUI() {
        // تحديث أزرار المصادقة
        const authButtons = document.querySelector('.auth-buttons');
        
        if (this.isLoggedIn && authButtons) {
            authButtons.innerHTML = `
                <div class="user-profile">
                    <div class="user-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="user-info">
                        <span class="user-name">${this.currentUser.name}</span>
                        <span class="user-role">${this.currentUser.role}</span>
                    </div>
                    <div class="user-dropdown">
                        <button class="dropdown-btn">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#profile" class="dropdown-item">
                                <i class="fas fa-user"></i>
                                الملف الشخصي
                            </a>
                            <a href="#courses" class="dropdown-item">
                                <i class="fas fa-book"></i>
                                دوراتي
                            </a>
                            <a href="#certificates" class="dropdown-item">
                                <i class="fas fa-certificate"></i>
                                الشهادات
                            </a>
                            <a href="#settings" class="dropdown-item">
                                <i class="fas fa-cog"></i>
                                الإعدادات
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#logout" class="dropdown-item logout-btn">
                                <i class="fas fa-sign-out-alt"></i>
                                تسجيل الخروج
                            </a>
                        </div>
                    </div>
                </div>
            `;

            // إضافة أحداث القائمة المنسدلة
            this.setupDropdownEvents();
        }
    }

    setupDropdownEvents() {
        const dropdownBtn = document.querySelector('.dropdown-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const logoutBtn = document.querySelector('.logout-btn');

        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', () => {
                dropdownMenu.classList.toggle('show');
            });

            // إغلاق القائمة عند النقر خارجها
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.user-dropdown')) {
                    dropdownMenu.classList.remove('show');
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleLogout();
            });
        }

        // أحداث عناصر القائمة المنسدلة
        const dropdownItems = document.querySelectorAll('.dropdown-item:not(.logout-btn)');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const text = item.textContent.trim();
                this.showNotification(`سيتم توجيهك إلى ${text}...`, 'info');
            });
        });
    }

    handleLogout() {
        this.isLoggedIn = false;
        this.currentUser = null;
        
        // إعادة تحميل الصفحة لاستعادة الحالة الأصلية
        location.reload();
    }

    showNotification(message, type = 'info') {
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // إضافة الإشعار للصفحة
        document.body.appendChild(notification);

        // إضافة أنماط الإشعار إذا لم تكن موجودة
        this.addNotificationStyles();

        // إظهار الإشعار
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // إخفاء الإشعار تلقائياً
        setTimeout(() => {
            this.hideNotification(notification);
        }, 4000);

        // إضافة حدث إغلاق الإشعار
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    addNotificationStyles() {
        if (document.querySelector('#notification-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                max-width: 400px;
                transform: translateX(100%);
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 10000;
                color: #333;
            }

            .notification.show {
                transform: translateX(0);
                opacity: 1;
            }

            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .notification-success {
                border-left: 4px solid #4caf50;
            }

            .notification-error {
                border-left: 4px solid #f44336;
            }

            .notification-warning {
                border-left: 4px solid #ff9800;
            }

            .notification-info {
                border-left: 4px solid #2196f3;
            }

            .notification-close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            }

            .notification-close:hover {
                background-color: #f5f5f5;
            }

            .user-profile {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                background: rgba(255, 255, 255, 0.1);
                padding: 0.5rem 1rem;
                border-radius: 25px;
                border: 2px solid rgba(255, 255, 255, 0.2);
                position: relative;
            }

            .user-avatar i {
                font-size: 1.5rem;
                color: var(--accent-gold);
            }

            .user-info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            .user-name {
                font-weight: 600;
                font-size: 0.9rem;
            }

            .user-role {
                font-size: 0.8rem;
                opacity: 0.8;
            }

            .dropdown-btn {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            }

            .dropdown-btn:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .dropdown-menu {
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                padding: 0.5rem 0;
                min-width: 200px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1000;
                margin-top: 0.5rem;
            }

            .dropdown-menu.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .dropdown-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                color: #333;
                text-decoration: none;
                transition: background-color 0.2s ease;
            }

            .dropdown-item:hover {
                background-color: #f5f5f5;
            }

            .dropdown-divider {
                border: none;
                border-top: 1px solid #eee;
                margin: 0.5rem 0;
            }

            .logout-btn {
                color: #f44336 !important;
            }

            .logout-btn:hover {
                background-color: #ffebee !important;
            }
        `;

        document.head.appendChild(styles);
    }
}

// تهيئة مدير المستخدم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.userManager = new UserManager();
});

