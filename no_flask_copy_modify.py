 #  no_flask_copy_modify.py - This script will make a non-Flask version of the project.

 #  Delete no_flask folder if it exists.
 #  Create no_flask folder. Create js, style, and image folders.

import os
import shutil
import subprocess

path = "no_flask"
js_path = path + "/js"
style_path = path + "/css"
image_path = path + "/image"

if os.path.exists(path):
    shutil.rmtree(path)

os.mkdir(path)

 #  Create a new file structure with js, style, and image folders
 #  Copy all relevent project files.

'''
os.mkdir(js_path)
os.mkdir(style_path)
os.mkdir(image_path)
'''

shutil.copy("templates/index.html", path)
shutil.copytree("static/js", js_path)
shutil.copytree("static/css", style_path)
shutil.copytree("static/image", image_path)

 #  Apply search and replace on the files to make them compatible without flask.

file_path = path + "/index.html"

file = open(file_path, "r")
contents = file.read()
file.close()

contents = contents.replace("{{ url_for('static', filename='", "")
contents = contents.replace("') }}", "")

file = open(file_path, "w")

file.write(contents)
file.close()

