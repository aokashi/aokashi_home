import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import styles from './index-layout.module.sass'
import Footer from '../components/footer.js'
import Logo from "../images/ah-logo.png"

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet>
        <body className={styles.indexBody} />
      </Helmet>
      <div className={styles.mainHeader}>
        <div className={`${styles.container} container`}>
          <img src={Logo} alt={data.site.siteMetadata.title}></img>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={`${styles.container} container`}>
          {children}
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default IndexLayout
