import fs, {readFileSync} from 'fs';
import matter from 'gray-matter';

export default function getFileContent (slug) {
  const folder = "/media/lessons/";
  const file = `${folder}${slug}`;
  console.log(file)
  const content = readFileSync(process.cwd() + file, 'utf-8');
  const matterResult = matter(content)
  return matterResult.content;
};