import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import renderAst from "../utils/renderAst"

import SEO from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import PageHeader from "../components/PageHeader"
import Breadcrumb from "../components/Breadcrumb"
import BoxList from "../components/BoxList"
import Box from "../components/Box/Box"

const DocsTemplate = ({
  data
}) => {
  const { page, pageList } = data
  const { frontmatter, htmlAst, tableOfContents } = page

  return (
    <Layout
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
      <BoxList>
        {pageList.nodes.map(node => (
          <Box
            key={node.fields.slug}
            title={node.frontmatter.title}
            link={node.fields.slug}
          >
            {node.excerpt}
          </Box>
        ))}
      </BoxList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!, $childPageGlob: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      htmlAst
      tableOfContents
      frontmatter {
        path
        title
      }
    }
    pageList: allMarkdownRemark(filter: {fields: {slug: {glob: $childPageGlob}}}) {
      nodes {
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
        }
      }
    }
  }
`

export default DocsTemplate
