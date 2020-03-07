module.exports = function(eleventyConfig) {
  // Ensure 11ty copies over Flare dependencies and doesn't process them
  eleventyConfig.addPassthroughCopy("src/flare/Data");
  eleventyConfig.addPassthroughCopy("src/flare/resources");
  eleventyConfig.addPassthroughCopy("src/flare/Skins");
  // Set input directory and templating language
  // Tell 11ty what filetypes to process and what templating engine to use
    return {
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      templateFormats: ["njk", "md", "html", "11ty.js"],
      dir: {
        input: "src"
      }
    };
};