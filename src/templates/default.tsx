import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"

import PageHeader from "../components/PageHeader"
import TableOfContents from "../components/TableOfContents"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react"

const DefaultTemplate = ({
  data,
  children
}) => {
  const { mdx } = data
  const { frontmatter, tableOfContents } = mdx
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
          {children}
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query pageDataByPath ($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      id
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
