import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import renderAst from "../utils/renderAst"

import SEO from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import PageHeader from "../components/PageHeader"
import Breadcrumb from "../components/Breadcrumb"

const DocsTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { fields, frontmatter, htmlAst, tableOfContents } = markdownRemark

  return (
    <Layout
      sidebarContent={<TableOfContents html={tableOfContents} />}
      headerContent={
        <PageHeader bottomContent={<Breadcrumb path={fields.slug} />}>
          <h1>{frontmatter.title}</h1>
        </PageHeader>
      }
    >
      <SEO title={frontmatter.title} />
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
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
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

export default DocsTemplate
