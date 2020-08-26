import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/page-layout"
import renderAst from "../utils/renderAst"

import SEO from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import PageHeader from "../components/PageHeader"

const DocsTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, tableOfContents } = markdownRemark
  const pathItems = frontmatter.path.split("/")
  const breadCrumbs = pathItems.reduce((currentBreadCrumbs, currentPathName, currentPageIndex) => {
    if (currentPathName === "") {
      return currentBreadCrumbs;
    }
    return currentBreadCrumbs.concat([{
      path: pathItems.slice(0, currentPageIndex + 1).join("/"),
      text: currentPathName,
    }])
  }, [])

  return (
    <Layout
      sidebarContent={<TableOfContents html={tableOfContents} />}
      headerContent={
        <PageHeader bottomContent={
          <nav className="breadcrumb">
            <ul>
              {breadCrumbs.map(item => (
                <li key={item.path}><Link to={item.path}>{item.text}</Link></li>
              ))}
            </ul>
          </nav>
        }>
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
