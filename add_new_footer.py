import os
import re

def add_new_footer_to_html_files(directory, footer_content):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".html") and filename != "footer.html":
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Remove any existing <footer> tags
                    content_without_old_footer = re.sub(
                        r"<footer[^>]*>.*?</footer>",
                        "", content, flags=re.DOTALL | re.IGNORECASE
                    )
                    
                    updated_content = content_without_old_footer
                    
                    # Find the closing </body> tag and insert the new footer before it
                    if re.search(r"</body>", updated_content, re.IGNORECASE):
                        updated_content = re.sub(r"</body>", footer_content + "\n</body>", updated_content, flags=re.IGNORECASE)
                    # If </body> not found, find </html> and insert before it
                    elif re.search(r"</html>", updated_content, re.IGNORECASE):
                        updated_content = re.sub(r"</html>", footer_content + "\n</html>", updated_content, flags=re.IGNORECASE)
                    # Otherwise, append to the end of the file
                    else:
                        updated_content += "\n" + footer_content
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(updated_content)
                    print(f"Updated: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

# Read the new footer content
with open("/home/ubuntu/suna3.athar.academy/footer.html", "r", encoding="utf-8") as f:
    new_footer_html = f.read()

# Define the directory to scan
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"

# Execute the function
add_new_footer_to_html_files(directory_to_scan, new_footer_html)


