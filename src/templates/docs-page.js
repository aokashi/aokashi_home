import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import renderAst from "../utils/renderAst"

import SEO from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import PageHeader from "../components/PageHeader"
import Breadcrumb from "../components/Breadcrumb"
import DocsNav from "../components/DocsNav"

const DocsTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark

  return (
    <Layout
      navbarContent={<DocsNav />}
      sidebarContent={<TableOfContents html={tableOfContents} />}
      headerContent={
        <PageHeader bottomContent={<Breadcrumb path={frontmatter.path} />}>
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

export default DocsTemplate
