import re
import os

def remove_footer(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing footers (if any) by looking for <footer> tags
    # This regex is designed to be more robust, matching any content between <footer> and </footer>
    content = re.sub(r'<footer[^>]*>.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

html_files = [
    '/home/ubuntu/suna3.athar.academy/cart.html',
    '/home/ubuntu/suna3.athar.academy/exam-night-review.html',
    '/home/ubuntu/suna3.athar.academy/footer-standalone.html',
    '/home/ubuntu/suna3.athar.academy/footer-template.html',
    '/home/ubuntu/suna3.athar.academy/host-programs.html',
    '/home/ubuntu/suna3.athar.academy/index.html',
    '/home/ubuntu/suna3.athar.academy/join-team.html',
    '/home/ubuntu/suna3.athar.academy/login.html',
    '/home/ubuntu/suna3.athar.academy/mawhiba.html',
    '/home/ubuntu/suna3.athar.academy/payment-gateway.html',
    '/home/ubuntu/suna3.athar.academy/professional-license.html',
    '/home/ubuntu/suna3.athar.academy/qudurat.html',
    '/home/ubuntu/suna3.athar.academy/signup.html',
    '/home/ubuntu/suna3.athar.academy/step.html',
    '/home/ubuntu/suna3.athar.academy/store.html',
    '/home/ubuntu/suna3.athar.academy/sunaa-mawhiba-camps.html',
    '/home/ubuntu/suna3.athar.academy/tahsili.html',
    '/home/ubuntu/suna3.athar.academy/temp_sunaa-mawhiba-camps.html',
    '/home/ubuntu/suna3.athar.academy/transportation-services.html'
]

for file_path in html_files:
    remove_footer(file_path)


