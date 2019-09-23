import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/page-layout'

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <article>
        <header className="article-header header">
          <h1 className="header__title">{frontmatter.title}</h1>
        </header>
        <div
          className="article-content content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default DefaultTemplate
