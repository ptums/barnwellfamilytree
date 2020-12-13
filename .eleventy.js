const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const htmlmin = require('html-minifier');

module.exports = function(config) {
    config.addPassthroughCopy("src/assets");
    config.addPlugin(lazyImagesPlugin);

    // minify html output
    config.addTransform('htmlmin', function(content, output) {
      if(output.endsWith('.html')){

        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      };

      return content
    });
  
    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  };