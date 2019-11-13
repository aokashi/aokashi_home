import React from "react"
import { graphql } from "gatsby"
import RenderAst from "../utils/renderAst"
import Layout from "../layouts/page-layout"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark
  return (
    <Layout sidebarContent={<TableOfContents html={tableOfContents} />}>
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
