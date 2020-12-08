const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(config) {
    config.addPassthroughCopy("src/js")
    config.addPassthroughCopy("src/css");
    config.addPlugin(lazyImagesPlugin);
  
    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  };