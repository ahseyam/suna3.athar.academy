footer_template = '''
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col about-us">
                    <h3>أكاديمية صُنَّاع الأثَر</h3>
                    <p>أكاديمية متخصصة في تقديم الدورات التدريبية والبرامج التعليمية المتميزة في مجالات القدرات والتحصيلي و STEP، بالإضافة إلى معسكرات صُنَّاع الموهبة التي تهدف إلى تنمية مهارات الشباب.</p>
                </div>
                <div class="footer-col quick-links">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="index.html">الرئيسية</a></li>
                        <li><a href="store.html">المتجر</a></li>
                        <li><a href="about-us.html">من نحن</a></li>
                        <li><a href="contact-us.html">اتصل بنا</a></li>
                    </ul>
                </div>
                <div class="footer-col contact-info">
                    <h3>تواصل معنا</h3>
                    <p><i class="fas fa-phone"></i> +966 55 463 6921</p>
                    <p><i class="fas fa-envelope"></i> info@alathar.academy</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 أكاديمية صُنَّاع الأثَر. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>
'''

with open('/home/ubuntu/suna3.athar.academy/store.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove existing footers (if any) by looking for <footer> tags
import re
content = re.sub(r'<footer[^>]*>.*?</footer>', '', content, flags=re.DOTALL)

# Insert the new footer before the closing </body> tag
content = content.replace('</body>', footer_template + '\n</body>')

with open('/home/ubuntu/suna3.athar.academy/store.html', 'w', encoding='utf-8') as f:
    f.write(content)


