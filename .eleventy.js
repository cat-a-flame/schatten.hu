const fs = require('fs');
const path = require('path');
const pagesFolder = './posts';
// get list of sub-folders inside the "pages" folder
const pageSections = fs.readdirSync(pagesFolder, {withFileTypes: true})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('posts/images');

  eleventyConfig.addFilter(
      'getCollection',
      require('./_filters/getCollection')
  );

  // add a collection for each folder
  pageSections.forEach((section) => {
    eleventyConfig.addCollection(`posts_${section}`, function(collection) {
      return collection.getFilteredByGlob(path.join(pagesFolder, `${section}/*.md`))
          .slice().sort((a, b) => +a.data.order > +b.data.order ? 1 : -1);
    });
  });

  return {
    passthroughFileCopy: true
  }
}
