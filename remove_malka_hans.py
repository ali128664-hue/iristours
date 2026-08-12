import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# Updates for Malka Hans
replace_in_file('public/llms.txt', {
    "Malka Hans, Islamabad, Punjab, Pakistan": "Islamabad, Pakistan"
})
replace_in_file('src/app/layout.tsx', {
    '"streetAddress": "Malka Hans",': '"streetAddress": "Islamabad",'
})
replace_in_file('src/components/layout/Footer.tsx', {
    'Malka Hans, Islamabad, Punjab': 'Islamabad, Pakistan'
})

print("Done removing Malka Hans.")
