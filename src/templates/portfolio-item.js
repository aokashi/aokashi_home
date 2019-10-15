import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import renderAst from '../renderAst'

const PortfolioItemTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <Link to="/portfolio/">戻る</Link>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
      </PageHeader>
      <div className="content">
        {
          renderAst(htmlAst)
        }
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(
      frontmatter: {
        path: {
          eq: $path
        }
        template: {
          eq: "portfolio-item"
        }
      }
    ) {
      id
      htmlAst
      frontmatter {
        path
        title
        tags
      }
    }
  }
`

export default PortfolioItemTemplate
