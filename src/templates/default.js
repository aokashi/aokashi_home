import React from 'react'
import { graphql } from 'gatsby'
import RenderAst from '../renderAst'
import Layout from '../layouts/page-layout'

import styles from './default.module.sass'

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark
  return (
    <Layout sidebarContent={renderSidebar(tableOfContents)}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{frontmatter.title}</h1>
      </header>
      <div className="content">
        {
          RenderAst(htmlAst)
        }
      </div>
    </Layout>
  )
}

const renderSidebar = (tableOfContents) => (
  <>
    <div
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  </>
)

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      htmlAst
      tableOfContents
      frontmatter {
        path
        title
      }
    }
  }
`

export default DefaultTemplate
