import React from "react"
import { graphql } from "gatsby"
import RenderAst from "../utils/renderAst"
import Layout from "../layouts/page-layout"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"
import SEO from "../components/seo"

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark
  return (
    <Layout
      sidebarContent={<TableOfContents html={tableOfContents} />}
      headerContent={
        <PageHeader>
          <h1>{frontmatter.title}</h1>
        </PageHeader>
      }
    >
      <SEO title={frontmatter.title} />
      <div className="content">
        {
          RenderAst(htmlAst)
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
      tableOfContents
      frontmatter {
        path
        title
      }
    }
  }
`

export default DefaultTemplate
