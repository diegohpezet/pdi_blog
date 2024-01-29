import os
import markdown
from pathlib import Path
from django.utils.safestring import mark_safe

def get_list_of_files(type):
    files = []
    directory = f"media/{type}/"

    for filename in os.listdir(directory):
        file = Path(directory + filename).read_text(encoding="utf-8")
        md = markdown.Markdown(extensions=['meta'])
        md.convert(file)

        for key, value in md.Meta.items():
            md.Meta[key] = ''.join(value)

        # Add filename property so users can access file later
        md.Meta['filename'] = filename[:-3]
        files.append(md.Meta)

    return files

def get_file_content(type, title):
    directory = f"media/{type}/"
    content = Path(directory + title + '.md').read_text(encoding="utf-8")
    return mark_safe(markdown.markdown(content, extensions=['meta', 'fenced_code']))

def get_file_metadata(type, title):
    directory = f"media/{type}/"
    file = Path(directory + title + '.md').read_text(encoding="utf-8")
    md = markdown.Markdown(extensions=['meta'])
    md.convert(file)

    # Turn lists into simple strings
    for key, value in md.Meta.items():
        md.Meta[key] = ''.join(value)

    return md.Meta