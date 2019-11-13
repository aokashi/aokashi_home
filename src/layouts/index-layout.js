import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./index-layout.module.sass"
import Link from "../components/Link"
import Footer from "../components/footer.js"
import Icon from "../images/aokashi-icon.png"
import convertDate from "../utils/convertDate"

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "ah-logo.png" }) {
          childImageSharp {
            fixed(width: 512, height: 96) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        allNavItemYaml {
          group(field: type) {
            nodes {
              name
              type
              link
              icon
              color
            }
            fieldValue
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
        allFeedAokashiRoom(
          sort: {
            fields: isoDate,
            order: DESC
          },
          limit: 1
        ) {
          nodes {
            title
            link
            isoDate
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
          <Img fixed={data.file.childImageSharp.fixed} alt={data.site.siteMetadata.title} className={styles.titleLogo} />
        </div>
        {
          navItems(data.allNavItemYaml)
        }
        <div className={styles.quickContents}>
          {
            Information(data.allFeedAokashiRoom.nodes[0])
          }
          <div className={styles.aboutme}>
            <img src={Icon} alt="Aokashi" className={styles.aboutmeIcon}/>
            {
              socialLinks(data.allSocialLinkYaml)
            }
          </div>
        </div>
      </div>
      <div className={`${styles.mainContent} container`}>
        {children}
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

const navItems = (navData) => (
  <>
    {
      navData.group.map((group, groupIndex) => (
        <div className={getNavGroupClassName(group.fieldValue)} key={groupIndex}>
          {
            group.nodes.map((navItem, navItemIndex) => (
              <div className={styles.navItem} key={navItemIndex}>
                <Link
                  href={navItem.link}
                  className={styles.navItemLink}
                >
                  {
                    navItem.icon &&
                      <img src={navItem.icon} alt={""} className={styles.navItemIcon} />
                  }
                  <span className={styles.navItemText}>{navItem.name}</span>
                </Link>
              </div>
            ))
          }
        </div>
      ))
    }
  </>
)

const socialLinks = (socialData) => (
  <div className={styles.social}>
    {
      socialData.nodes.map((socialItem, socialItemIndex) => (
        <div className={styles.socialItem} key={socialItemIndex}>
          <SocialLink socialItem={socialItem}>
            <SocialIcon icon={socialItem.icon} alt={socialItem.name} />
            <span className={styles.socialText}>
              {socialItem.text}
            </span>
          </SocialLink>
        </div>
      ))
    }
  </div>
)

const SocialLink = ({ socialItem, children }) => {
  const titleText = `${socialItem.name} - ${socialItem.text}`;
  if (socialItem.link) {
    return (
      <a href={socialItem.link} title={titleText} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.hasLink}`}>{children}</a>
    )
  } else {
    return (
      <span title={titleText}>{children}</span>
    )
  }
}

const SocialIcon = ({ icon, alt }) => {
  if (icon) {
    return (
      <FontAwesomeIcon icon={["fab", icon]} className={`${styles.socialIcon} ${styles.isIcon}`} />
    )
  } else {
    return (
      <span className={`${styles.socialIcon} ${styles.isText}`}>{alt}</span>
    )
  }
}

const Information = (data) => (
  <div className={styles.information}>
    <span className={styles.informationTitle}>ブログ記事</span>
    <a href={data.link} target="_blank" rel="noopener noreferrer" className={styles.informationLink}>
      {data.title}
      <time dateTime={data.isoDate} className={styles.informationDate}>{convertDate(data.isoDate)}</time>
    </a>
  </div>
)

function getNavGroupClassName(groupValue) {
  return styles[groupValue + "Nav"]
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutMeText: PropTypes.string,
}

export default IndexLayout
