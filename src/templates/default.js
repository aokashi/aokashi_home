import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"
import Seo from "../components/seo"

const DefaultTemplate = ({
  data
}) => {
  const { mdx } = data
  const { frontmatter, body, tableOfContents } = mdx
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
      <div className="content">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
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
