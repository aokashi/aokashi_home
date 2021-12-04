import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react"

const DefaultTemplate = ({
  data
}) => {
  const { mdx } = data
  const { frontmatter, body, tableOfContents } = mdx
  return (
    <Layout
      sidebarContent={<TableOfContents body={tableOfContents} />}
      headerContent={
        <PageHeader>
          <h1>{frontmatter.title}</h1>
        </PageHeader>
      }
    >
      <Seo title={frontmatter.title} />
      <div className="content">
        <MDXProvider>
          <MDXRenderer frontmatter={frontmatter}>
            {body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      id
      body
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
