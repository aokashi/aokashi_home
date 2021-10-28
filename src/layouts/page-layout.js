/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {
  pageBody,
  mainContent,
  nav,
  navContent,
  navItem,
  isActive,
  article,
  header,
  rightSidebar,
  bottomLink,
  floatNav,
  navIcon,
  navText
} from "./page-layout.module.sass"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "../components/Link"

const Layout = ({ headerContent, sidebarContent, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allNavItemYaml {
        nodes {
          name
          type
          link
          icon
        }
      }
      file(relativePath: {eq: "ah-logo_mini.png"}) {
        childImageSharp {
          fixed (width: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const navItems = data.allNavItemYaml.nodes
  const siteNavItems = navItems.filter(item => item.type === "site")
  const contentsNavItems = navItems.filter(item => item.type === "contents")

  return (
    <>
      <Helmet>
        <body className={pageBody} />
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteNavItems={siteNavItems}
        logoImage={data.file}
      />
      <main className={mainContent}>
        <nav className={nav}>
          <nav className={navContent}>
            <Link href="/" className={navItem}>Home</Link>
            {
              contentsNavItems.map((navItem, navIndex) => (
                <Link href={navItem.link} className={navItem} activeClassName={isActive} key={navIndex}>{navItem.name}</Link>
              ))
            }
          </nav>
        </nav>
        <article className={`${article} container`}>
          {headerContent &&
            <header className={header}>{headerContent}</header>
          }
          <div className="section">{children}</div>
        </article>
        {sidebarContent &&
          <aside className={rightSidebar}>
            {sidebarContent}
          </aside>
        }
        <div className={bottomLink}>
          <button className="button is-fullwidth is-light" onClick={backToTop}>トップへ戻る</button>
        </div>
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
      <div className={floatNav}>
        {
          data.allNavItemYaml.nodes.map((navItem, navIndex) => {
            if (navItem.type !== "contents") {
              return null
            }
            return (
              <Link href={navItem.link} className={navItem} activeClassName={isActive} key={navIndex}>
                <img src={navItem.icon} alt="" className={navIcon} />
                <span className={navText}>{navItem.name}</span>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

const backToTop = () => {
  window.scroll(0, 0)
}

Layout.propTypes = {
  headerContent: PropTypes.node,
  sidebarContent: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default Layout
