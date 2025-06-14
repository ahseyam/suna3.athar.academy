import os
import re

def add_js_to_html_files(directory, js_script_tag):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".html") and filename != "footer.html":
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Add the script tag before the closing </body> tag
                    if re.search(r"</body>", content, re.IGNORECASE):
                        updated_content = re.sub(r"</body>", js_script_tag + "\n</body>", content, flags=re.IGNORECASE)
                    else:
                        updated_content = content + "\n" + js_script_tag # Fallback if </body> not found
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(updated_content)
                    print(f"Updated: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

# Define the JavaScript script tag to be added
js_tag = '<script src="js/load_footer.js" defer></script>'

# Define the directory to scan
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"

# Execute the function
add_js_to_html_files(directory_to_scan, js_tag)


