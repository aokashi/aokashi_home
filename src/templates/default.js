import React from 'react'
import { graphql } from 'gatsby'
import RenderAst from '../renderAst'
import Layout from '../layouts/page-layout'

import styles from './default.module.sass'

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <article>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>{frontmatter.title}</h1>
        </header>
        <div class="content">
          {
            RenderAst(htmlAst)
          }
        </div>
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
