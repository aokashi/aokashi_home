import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import { Box, Heading } from "@chakra-ui/react"

import { BasicPageHeader } from "../components/PageHeader"
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
        <BasicPageHeader>{frontmatter.title}</BasicPageHeader>
      }
    >
      <Seo title={frontmatter.title} />
      <Box className="ah-article">
        <MDXProvider>
          {children}
        </MDXProvider>
      </Box>
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
