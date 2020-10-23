import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const DocsNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {path: {glob: "/docs/**"}}}) {
        nodes {
          frontmatter {
            path
            title
          }
        }
      }
    }
  `)

  return (
    <aside className="menu">
      <p className="menu-label">ページ一覧</p>
      <ul className="menu-list">
        {data.allMarkdownRemark.nodes.map((node) => (
          <li><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>
        ))}
      </ul>
    </aside>
  )
}

export default DocsNav
