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
      defaultPages: allMdx {
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
      portfolioTags: allMdx(
        filter: {
          fields: {
            slug: {
              glob: "/portfolio/*"
            }
          }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    result.errors.forEach(error => console.error(error.toString()))
    return Promise.reject(result.errors)
  }

  const defaultPages = result.data.defaultPages.edges
  defaultPages.forEach(({ node }) => {
    
    const templateName = node.frontmatter.template
      ? String(node.frontmatter.template)
      : 'default'
    const nodeId = node.id

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${templateName}.js`),
      context: {
        nodeId
      }
    })
  })

  const portfolioTags = result.data.portfolioTags.group
  portfolioTags.forEach(groupItem => {
    const tagName = groupItem.fieldValue

    createPage({
      path: `/portfolio/tag/${tagName}/`,
      component: path.resolve('./src/templates/portfolio-tag.js'),
      context: {
        tag: tagName,
      }
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
