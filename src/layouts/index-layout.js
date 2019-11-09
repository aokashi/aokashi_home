import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          nodes {
            name
            type
            link
            icon
            color
          }
        }
        allSocialLinkYaml {
          nodes {
            name
            link
            text
            icon
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
      <div className={`${styles.firstScreen} container`}>
        <div className={styles.title}>
          <img src={Logo} alt={data.site.siteMetadata.title} className={styles.titleLogo} />
        </div>
        {
          navItems(data.allNavItemYaml)
        }
        <div className={styles.aboutme}>
          <img src={Icon} alt="Aokashi" className={styles.aboutmeIcon}/>
          {
            socialLinks(data.allSocialLinkYaml)
          }
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

const navItems = (navData) => (
  <div className={styles.nav}>
    {
      navData.nodes.map((navItem, navItemIndex) => (
        <div className={styles.navItem} key={navItemIndex}>
          <Link
            href={navItem.link}
            className={styles.navItemLink}
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

const socialLinks = (socialData) => (
  <div className={styles.social}>
    {
      socialData.nodes.map((socialItem, socialItemIndex) => (
        <div className={styles.socialItem} key={socialItemIndex}>
          <SocialLink socialItem={socialItem}>
            <SocialIcon icon={socialItem.icon} alt={socialItem.name} />
            {!socialItem.link && socialItem.text}
          </SocialLink>
        </div>
      ))
    }
  </div>
)

const SocialLink = ({ socialItem, children }) => {
  if (socialItem.link) {
    return (
      <a href={socialItem.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{children}</a>
    )
  } else {
    return (
      <span className={styles.socialLink}>{children}</span>
    )
  }
}

const SocialIcon = ({ icon, alt }) => {
  if (icon) {
    return (
      <FontAwesomeIcon icon={['fab', icon]} className={styles.socialIcon} />
    )
  } else {
    return (
      <span className={styles.socialIcon}>{alt}</span>
    )
  }
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutMeText: PropTypes.string,
}

export default IndexLayout
