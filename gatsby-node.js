/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    result.errors.forEach(error => console.error(error.toString()))
    return Promise.reject(result.errors)
  }

  const pages = result.data.allMarkdownRemark.edges
  pages.forEach(({ node }) => {
    
    const templateName = node.frontmatter.template
      ? String(node.frontmatter.template)
      : 'default'
    const nodeId = node.id

    createPage({
      path: trimPath(node.fields.slug),
      component: path.resolve(`./src/templates/${templateName}.js`),
      context: {
        nodeId
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * パスから末尾のスラッシュを削除します。
 * @param {string} path 
 * @return {string}
 */
function trimPath(path) {
  if (path === '/') {
    return path;
  }

  return path.replace(/\/$/, ``);
}
