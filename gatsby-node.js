/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  // tailwind.macro で fs が見つからないエラーの対策
  const config = getConfig()
  config.node = {
    fs: 'empty'
  };
}
