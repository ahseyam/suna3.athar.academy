import os
import re

def embed_footer_in_html_files(directory, footer_content):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".html") and filename != "footer.html":
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Remove any existing <footer> tags first to avoid duplication
                    content_without_old_footer = re.sub(
                        r"<footer[^>]*>.*?</footer>",
                        "", content, flags=re.DOTALL | re.IGNORECASE
                    )

                    # Insert the new footer content before the closing </body> tag
                    if re.search(r"</body>", content_without_old_footer, re.IGNORECASE):
                        updated_content = re.sub(r"</body>", footer_content + "\n</body>", content_without_old_footer, flags=re.IGNORECASE)
                    else:
                        updated_content = content_without_old_footer + "\n" + footer_content # Fallback if </body> not found
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(updated_content)
                    print(f"Updated: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

# Read the footer content from footer.html
footer_file_path = "/home/ubuntu/suna3.athar.academy/footer.html"
with open(footer_file_path, "r", encoding="utf-8") as f:
    footer_html_content = f.read()

# Define the directory to scan
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"

# Execute the function to embed the footer
embed_footer_in_html_files(directory_to_scan, footer_html_content)


