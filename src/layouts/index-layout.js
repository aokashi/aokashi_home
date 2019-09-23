import React from "react"
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
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <img src={Logo} alt={data.site.siteMetadata.title}></img>
        </div>
      </div>
      <div className={styles.mainMenu}>
        <div className={styles.container}>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {children}
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default IndexLayout
