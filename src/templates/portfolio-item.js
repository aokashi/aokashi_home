import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import renderAst from '../renderAst'

const PortfolioItem = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  // FIXME: markdownRemark is null
  return (
    <Layout>
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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

export default PortfolioItem
