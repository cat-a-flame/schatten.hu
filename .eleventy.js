module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('posts/images');
  eleventyConfig.setDataDeepMerge(false);
  
  return {
    passthroughFileCopy: true
  }
}
