import os
import re

def do_the_thing(directory, padding_length):
    # Get the list of files in the directory
    thumb_files = sorted([file for file in os.listdir(directory) if re.match(r"^Photo_[\d-]+_thumbnail\.png$", file)])
    # Rename files with padded zeros
    for i, file in enumerate(thumb_files):
        file_name, file_ext = os.path.splitext(file)
        new_file_name = f"image_{str(i + 1).zfill(padding_length)}_thumbnail{file_ext}"
        os.rename(os.path.join(directory, file), os.path.join(directory, new_file_name))
    
    img_files = sorted([file for file in os.listdir(directory) if re.match(r"^Photo_[\d-]+\.png$", file)])
    # Rename files with padded zeros
    for i, file in enumerate(img_files):
        file_name, file_ext = os.path.splitext(file)
        new_file_name = f"image_{str(i + 1).zfill(padding_length)}{file_ext}"
        os.rename(os.path.join(directory, file), os.path.join(directory, new_file_name))

# Specify the directory where the files are located
directory = input("Enter the directory path: ")
# Specify the padding length
padding_length = int(input("Enter the padding length: "))
# Call the function to rename files with padded zeros
do_the_thing(directory, padding_length)