import os
import io
from PIL import Image
try:
    from rembg import remove
except ImportError:
    print("Error: 'rembg' is not installed. Please run: pip install rembg pillow")
    exit(1)

# Folders for input and output
INPUT_DIR = 'raw_car_images'
OUTPUT_DIR = 'public/images/fleet'

# Create directories if they don't exist
os.makedirs(INPUT_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

def process_images():
    print(f"Looking for images in '{INPUT_DIR}'...")
    
    valid_extensions = ('.png', '.jpg', '.jpeg', '.webp')
    files = [f for f in os.listdir(INPUT_DIR) if f.lower().endswith(valid_extensions)]
    
    if not files:
        print(f"No images found in '{INPUT_DIR}'. Please add your downloaded car images there.")
        return

    print(f"Found {len(files)} images to process.\n")

    for index, filename in enumerate(files, start=1):
        input_path = os.path.join(INPUT_DIR, filename)
        
        # Save output as transparent PNG
        output_filename = os.path.splitext(filename)[0] + '.png'
        output_path = os.path.join(OUTPUT_DIR, output_filename)
        
        print(f"[{index}/{len(files)}] Processing: {filename} ...")
        
        try:
            # Open the image
            with open(input_path, 'rb') as i:
                input_data = i.read()
            
            # Remove the background using AI
            output_data = remove(input_data)
            
            # Open the result with Pillow to crop and optimize
            img = Image.open(io.BytesIO(output_data)).convert("RGBA")
            
            # Find the bounding box of the non-transparent pixels (the car itself)
            bbox = img.getbbox()
            if bbox:
                img = img.crop(bbox)
            
            # Resize while maintaining aspect ratio (e.g., max width 800px for web optimization)
            max_size = (800, 600)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save as optimized transparent PNG
            img.save(output_path, format="PNG", optimize=True)
            print(f"  -> Saved successfully as {output_filename} in {OUTPUT_DIR}\n")
            
        except Exception as e:
            print(f"  -> Error processing {filename}: {e}\n")

    print(f"✅ All images processed! You can find the transparent, optimized cars in '{OUTPUT_DIR}'.")

if __name__ == '__main__':
    process_images()
