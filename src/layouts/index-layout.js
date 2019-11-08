import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import styles from './index-layout.module.sass'
import Link from '../components/Link'
import Footer from '../components/footer.js'
import Logo from "../images/ah-logo.png"
import Icon from '../images/aokashi-icon.png'

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allNavItemYaml {
          group(field: type) {
            nodes {
              name
              link
              color
              icon
            }
            fieldValue
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
      <div className={styles.firstScreen}>
        <div className={styles.title}>
          <img src={Logo} alt={data.site.siteMetadata.title} className={styles.titleLogo} />
        </div>
        <div className={styles.front}>
          <div className={styles.nav}>
            {
              navItems(data.allNavItemYaml)
            }
          </div>
          <div className={styles.aboutme}>
            <img src={Icon} alt="Aokashi" className={styles.aboutmeIcon}/>
            <div className={styles.aboutmeTitle}>Aokashi について</div>
          </div>
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

const navItems = (navData) => (
  <>
    {
      navData.group.map((navItems, navItemsIndex) => {
        const navItemsClassName = styles['nav' + toFirstUpperCase(navItems.fieldValue)]
        return (
          <div className={`${navItemsClassName} columns is-mobile is-gapless`} key={navItemsIndex}>
            {
              navItems.nodes.map((navItem, navItemIndex) => (
                <div className={`${styles.navItem} column`} key={navItemIndex}>
                  <Link
                    href={navItem.link}
                    className={styles.navItemLink}
                    style={{
                      backgroundColor: navItem.color
                    }}
                  >
                    {
                      navItem.icon &&
                        <img src={navItem.icon} alt={''} className={styles.navItemIcon} />
                    }
                    <span className={styles.navItemText}>{navItem.name}</span>
                  </Link>
                </div>
              ))
            }
          </div>
        )
      })
    }
  </>
)

/**
 * 文字列の先頭を大文字にします
 * @param {string} string
 */
function toFirstUpperCase(string) {
  const firstLetter = string.charAt(0)
  return firstLetter.toUpperCase() + string.substring(1)
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutMeText: PropTypes.string,
}

export default IndexLayout
