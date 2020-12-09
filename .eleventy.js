const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(config) {
    config.addPassthroughCopy("src/assets");
    config.addPlugin(lazyImagesPlugin);
  
    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  };