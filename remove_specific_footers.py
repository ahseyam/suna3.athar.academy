import re

def remove_specific_footers(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing footers (if any) by looking for <footer> tags
    content = re.sub(r'<footer[^>]*>.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)

    # Remove specific footer-related CSS link if present
    content = re.sub(r'<link rel="stylesheet" href="css/new-footer.css">', '', content, flags=re.DOTALL | re.IGNORECASE)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

remove_specific_footers('/home/ubuntu/suna3.athar.academy/sunaa-mawhiba-camps.html')
remove_specific_footers('/home/ubuntu/suna3.athar.academy/cart.html')


