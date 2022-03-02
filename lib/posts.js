import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    id: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
} 

export function getCategoryPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const categoryPosts = allPosts.filter(p => p.category)

  return categoryPosts;
} 



export function getAllPostIds() {
  const allPosts = getAllPosts();
  const categories = allPosts.filter(post => post.category)

  return categories.map(postParam => {
    console.log(postParam)
    return {
      params: {
        category: postParam.category,
        id: postParam.id.replace(/\.md$/, '')
      }
    }
  })

}
