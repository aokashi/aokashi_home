import React from 'react'
import { graphql } from 'gatsby'
import RenderAst from '../renderAst'
import Layout from '../layouts/page-layout'

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <article>
        <header className="article-header header">
          <h1 className="header__title">{frontmatter.title}</h1>
        </header>
        {
          RenderAst(htmlAst)
        }
      </article>
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
      }
    }
  }
`

export default DefaultTemplate
