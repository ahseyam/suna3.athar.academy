import os
import re

def remove_existing_footers_from_html_files(directory):
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
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(content_without_old_footer)
                    print(f"Cleaned: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

# Define the directory to scan
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"

# Execute the function to remove existing footers
remove_existing_footers_from_html_files(directory_to_scan)


