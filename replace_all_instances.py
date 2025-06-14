import os
import re

def replace_text_in_all_files(directory, old_texts, new_text):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith((".html", ".css", ".js")):
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    updated_content = content
                    for old_text in old_texts:
                        # Use re.sub with re.IGNORECASE and re.UNICODE for robust replacement
                        updated_content = re.sub(re.escape(old_text), new_text, updated_content, flags=re.IGNORECASE | re.UNICODE)
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(updated_content)
                    print(f"Updated: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

# Define the directory and the texts to replace
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"
old_names = ["معسكر صناع الموهبة", "معسكر صُنّاع الموهبة", "صُنّاع الموهبة"]
new_name = "معسكر عالم المواهب"

# Execute the replacement
replace_text_in_all_files(directory_to_scan, old_names, new_name)


