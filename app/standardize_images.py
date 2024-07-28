from PIL import Image
import os

def standardize_image(input_path, output_path, aspect_ratio=(16, 9)):
    with Image.open(input_path) as img:
        img_aspect_ratio = img.width / img.height
        target_aspect_ratio = aspect_ratio[0] / aspect_ratio[1]

        if img_aspect_ratio > target_aspect_ratio:
            # Crop the width
            new_width = int(img.height * target_aspect_ratio)
            offset = (img.width - new_width) // 2
            img = img.crop((offset, 0, offset + new_width, img.height))
        else:
            # Crop the height
            new_height = int(img.width / target_aspect_ratio)
            offset = (img.height - new_height) // 2
            img = img.crop((0, offset, img.width, offset + new_height))

        img = img.resize((1600, 900), Image.ANTIALIAS)
        img.save(output_path)

if __name__ == "__main__":
    input_folder = "input_images"
    output_folder = "output_images"
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(input_folder):
        if filename.endswith((".jpg", ".jpeg", ".png")):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)
            standardize_image(input_path, output_path)
