import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';

export default function getFileMetadata(path) {
  const folder = path + '/';
  const files = readdirSync(folder).filter(file => file.endsWith('.md'));

  const contents = files.map((filename) => {
    const fileContents = fs.readFileSync(`${path}/${filename}`, 'utf-8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      topic: matterResult.data.topic,
      slug: filename
    };
  });

  return contents;
}