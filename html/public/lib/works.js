import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'work');

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        work: fileName.replace(/\.js$/, ''),
      },
    };
  });
}

// export function getPostData(work) {
//   const fullPath = path.join(postsDirectory, `${work}.js`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
// //   const matterResult = matter(fileContents);

//   // Combine the data with the id
//   return {
//     work,
//     // ...matterResult.data,
//   };
// }