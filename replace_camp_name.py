import os
import re

def replace_text_in_files(directory, old_text, new_text):
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                # Use re.sub for case-insensitive replacement if needed, or simple replace
                updated_content = content.replace(old_text, new_text)
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(updated_content)
                print(f"Updated: {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

# Define the directory and the texts to replace
directory_to_scan = "/home/ubuntu/suna3.athar.academy/"
old_name = "معسكر صناع الموهبة"
new_name = "معسكر عالم المواهب"

# Execute the replacement
replace_text_in_files(directory_to_scan, old_name, new_name)


