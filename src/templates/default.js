import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"
import Seo from "../components/seo"

const DefaultTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <Layout
      sidebarContent={<TableOfContents html={tableOfContents} />}
      headerContent={
        <PageHeader>
          <h1>{frontmatter.title}</h1>
        </PageHeader>
      }
    >
      <Seo title={frontmatter.title} />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      html
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export default DefaultTemplate
