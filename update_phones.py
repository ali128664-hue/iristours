import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content.replace("+92-306-630-5875", "+92-315-497-3906")
    new_content = new_content.replace("+92 306 6305875", "+92 315 4973906")
    new_content = new_content.replace("+92 3066 30 58 75", "+92 315 497 3906")
    new_content = new_content.replace("923066305875", "923154973906")
    new_content = new_content.replace("+923066305875", "+923154973906")

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.txt', '.json', '.js', '.md', '.html', '.css')):
            replace_in_file(os.path.join(root, file))

print("Done updating phone numbers.")
