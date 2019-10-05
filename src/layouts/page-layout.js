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
import styles from './page-layout.module.sass'

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <body className={styles.pageBody} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.mainContent}>
        <div className="container">
          <article class={styles.mainArticle}>
            { title &&
              <header class={styles.mainArticleHeader}>
                <h1>{title}</h1>
              </header>
            }
            {children}
          </article>
        </div>
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
