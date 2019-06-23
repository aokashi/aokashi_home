// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

const path = require('path');
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass')
      ]
    })
}

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Aokashi Home',
  siteDescription: 'Aokashi が制作した作品を置くホームページ',
  plugins: [],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })
  }
}
