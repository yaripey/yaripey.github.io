module.exports = (config) => {
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/assets')
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts'
    },
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passtroughFileCopy: true,
    templateFormats: [
      'njk'
    ]
  }
}
