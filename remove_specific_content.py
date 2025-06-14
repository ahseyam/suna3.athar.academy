import re

def remove_content(file_path, patterns):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Patterns for sunaa-mawhiba-camps.html (based on Screenshot2025-06-14at4.33.26PM.png)
# This pattern targets the div with class 'footer-content' and its parent div
# It's a more aggressive pattern to ensure removal of the entire block
sunaa_mawhiba_patterns = [
    r'<div class="footer-container">.*?<div class="footer-content">.*?<div class="footer-bottom">.*?</div>.*?</div>.*?</div>',
    r'<div class="footer-bottom">.*?</div>'
]

# Patterns for cart.html (based on Screenshot2025-06-14at4.33.02PM.png)
# This pattern targets the div with class 'footer-content' and its parent div
# It's a more aggressive pattern to ensure removal of the entire block
cart_patterns = [
    r'<div class="footer-container">.*?<div class="footer-content">.*?<div class="footer-bottom">.*?</div>.*?</div>.*?</div>',
    r'<div class="footer-bottom">.*?</div>'
]

# Attempt to remove the content from sunaa-mawhiba-camps.html
try:
    remove_content('/home/ubuntu/suna3.athar.academy/sunaa-mawhiba-camps.html', sunaa_mawhiba_patterns)
    print('Successfully attempted to remove content from sunaa-mawhiba-camps.html')
except Exception as e:
    print(f'Error processing sunaa-mawhiba-camps.html: {e}')

# Attempt to remove the content from cart.html
try:
    remove_content('/home/ubuntu/suna3.athar.academy/cart.html', cart_patterns)
    print('Successfully attempted to remove content from cart.html')
except Exception as e:
    print(f'Error processing cart.html: {e}')


