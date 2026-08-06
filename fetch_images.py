import json
import urllib.request
import urllib.parse
import time

def get_wiki_image(query):
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&utf8=&format=json"
    headers = {'User-Agent': 'IrisToursBot/1.0 (test@example.com)'}
    try:
        req = urllib.request.Request(search_url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read())
            
        if data['query']['search']:
            title = data['query']['search'][0]['title']
            page_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=1000"
            req2 = urllib.request.Request(page_url, headers=headers)
            with urllib.request.urlopen(req2) as res2:
                data2 = json.loads(res2.read())
                pages = data2['query']['pages']
                for page_id in pages:
                    if 'thumbnail' in pages[page_id]:
                        return pages[page_id]['thumbnail']['source']
    except Exception as e:
        print(f"Error fetching {query}: {e}")
    return None

with open('src/data/fleet.json', 'r', encoding='utf-8') as f:
    fleet = json.load(f)

for car in fleet:
    if 'wikipedia.org' in car['images']['thumbnail']:
        continue
    
    name = car['name']
    search_name = name.replace('(GLi / Altis / Grande)', 'Altis').strip()
    if 'Limousine' in search_name:
        search_name = search_name.replace('Limousine', 'Stretch Limousine')
        
    print(f"Searching for {search_name}...")
    img_url = get_wiki_image(search_name)
    if img_url:
        car['images']['thumbnail'] = img_url
        car['images']['gallery'] = [img_url]
        print(f"  Found: {img_url}")
    else:
        print("  Not found.")
    time.sleep(2) # 2 seconds delay to respect rate limit

with open('src/data/fleet.json', 'w', encoding='utf-8') as f:
    json.dump(fleet, f, indent=2)

print("Done updating fleet.json")
