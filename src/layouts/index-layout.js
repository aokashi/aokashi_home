import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  indexBody,
  firstScreen,
  title,
  quickContents,
  aboutme,
  aboutmeIcon,
  mainContent,
  navItem as styleNavItem,
  navItemLink as styleNavItemLink,
  navItemIcon as styleNavItemIcon,
  navItemText as styleNavItemText,
  social,
  socialItem as styleSocialItem,
  socialText as styleSocialText,
  socialLink,
  hasLink,
  socialIcon,
  isIcon,
  socialIcon,
  isText,
  information,
  informationTitle,
  informationLink,
  informationDate
} from "./index-layout.module.sass"
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
            fluid {
              ...GatsbyImageSharpFluid
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

  const [screenHeight, setScreenHeight] = useState(0)
  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, [])

  return (
    <>
      <Helmet>
        <body className={indexBody} />
      </Helmet>
      <div className={`${firstScreen} container`} style={{ minHeight: `${screenHeight}px` }}>
        <div className={title}>
          <Img fluid={data.file.childImageSharp.fluid} alt={data.site.siteMetadata.title} />
        </div>
        {
          navItems(data.allNavItemYaml)
        }
        <div className={quickContents}>
          {
            Information(data.allFeedAokashiRoom.nodes[0])
          }
          <div className={aboutme}>
            <img src={Icon} alt="Aokashi" className={aboutmeIcon}/>
            {
              socialLinks(data.allSocialLinkYaml)
            }
          </div>
        </div>
      </div>
      <div className={`${mainContent} container`}>
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
              <div className={styleNavItem} key={navItemIndex}>
                <Link
                  href={navItem.link}
                  className={styleNavItemLink}
                >
                  {
                    navItem.icon &&
                      <img src={navItem.icon} alt={""} className={styleNavItemIcon} />
                  }
                  <span className={styleNavItemText}>{navItem.name}</span>
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
  <div className={social}>
    {
      socialData.nodes.map((socialItem, socialItemIndex) => (
        <div className={styleSocialItem} key={socialItemIndex}>
          <SocialLink socialItem={socialItem}>
            <SocialIcon icon={socialItem.icon} alt={socialItem.name} />
            <span className={styleSocialText}>
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
      <a href={socialItem.link} title={titleText} target="_blank" rel="noopener noreferrer" className={`${socialLink} ${hasLink}`}>{children}</a>
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
      <FontAwesomeIcon icon={["fab", icon]} className={`${socialIcon} ${isIcon}`} />
    )
  } else {
    return (
      <span className={`${socialIcon} ${isText}`}>{alt}</span>
    )
  }
}

const Information = (data) => (
  <div className={information}>
    <span className={informationTitle}>ブログ記事</span>
    <a href={data.link} target="_blank" rel="noopener noreferrer" className={informationLink}>
      {data.title}
      <time dateTime={data.isoDate} className={informationDate}>{convertDate(data.isoDate)}</time>
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
