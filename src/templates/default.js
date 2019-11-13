import React from "react"
import { graphql } from "gatsby"
import RenderAst from "../utils/renderAst"
import Layout from "../layouts/page-layout"

import PageHeader from "../components/PageHeader"

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark
  return (
    <Layout sidebarContent={renderSidebar(tableOfContents)}>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
      </PageHeader>
      <div className="content">
        {
          RenderAst(htmlAst)
        }
      </div>
    </Layout>
  )
}

/**
 * @todo tableOfContents の ul や li にクラスが付与できないか確認する
 * @see https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
 */
const renderSidebar = (tableOfContents) => (
  <aside className="menu">
    <p className="menu-label">目次</p>
    <div
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  </aside>
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
