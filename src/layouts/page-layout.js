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

import styles from "./page-layout.module.sass"
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
    }
  `)
  const navItems = data.allNavItemYaml.nodes
  const siteNavItems = navItems.filter(item => item.type === "site")
  const contentsNavItems = navItems.filter(item => item.type === "contents")

  return (
    <>
      <Helmet>
        <body className={styles.pageBody} />
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteNavItems={siteNavItems}
      />
      <main className={styles.mainContent}>
        <nav className={styles.nav}>
          <nav className={styles.navContent}>
            <Link href="/" className={styles.navItem}>Home</Link>
            {
              contentsNavItems.map((navItem, navIndex) => (
                <Link href={navItem.link} className={styles.navItem} activeClassName={styles.isActive} key={navIndex}>{navItem.name}</Link>
              ))
            }
          </nav>
        </nav>
        <article className={`${styles.article} container`}>
          {headerContent &&
            <header className={styles.header}>{headerContent}</header>
          }
          <div className={styles.content}>{children}</div>
        </article>
        {sidebarContent &&
          <aside className={styles.rightSidebar}>
            {sidebarContent}
          </aside>
        }
        <div className={styles.bottomLink}>
          <button className="button is-fullwidth is-light" onClick={backToTop}>トップへ戻る</button>
        </div>
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
      <div className={styles.floatNav}>
        {
          data.allNavItemYaml.nodes.map((navItem, navIndex) => {
            if (navItem.type !== "contents") {
              return null
            }
            return (
              <Link href={navItem.link} className={styles.navItem} activeClassName={styles.isActive} key={navIndex}>
                <img src={navItem.icon} alt="" className={styles.navIcon} />
                <span className={styles.navText}>{navItem.name}</span>
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
