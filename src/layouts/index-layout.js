import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import * as styles from "./index-layout.module.sass"
import Link from "../components/Link"
import Footer from "../components/footer.js"
import Icon from "../images/aokashi-icon.png"
import convertDate from "../utils/convertDate"
import { Container, Grid, GridItem, Stack } from "@chakra-ui/react"

const gridTemplateNarrow = `
". . ." 1fr
". l ." 96px
". . ." 1fr
"n n n" auto
"e e e" auto
"b b b" auto
/ 1fr minmax(auto,512px) 1fr
`;

const gridTemplateWide = `
"n . ."  1fr
"n l ." 96px
"n . e" 1fr
"b b b" auto
/ 1fr 512px 1fr
`;

const {
  indexBody,
  aboutme,
  aboutmeIcon,
  navItem: styleNavItem,
  navItemLink: styleNavItemLink,
  navItemIcon: styleNavItemIcon,
  navItemText: styleNavItemText,
  social,
  socialItem: styleSocialItem,
  socialText: styleSocialText,
  socialLink,
  hasLink,
  socialIcon,
  isIcon,
  isText,
  information,
  informationTitle,
  informationLink,
  informationDate
} = styles;

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`{
  site {
    siteMetadata {
      title
    }
  }
  file(relativePath: {eq: "ah-logo.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  allNavItemYaml {
    group(field: {type: SELECT}) {
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
  allFeedAokashiRoom(sort: {isoDate: DESC}, limit: 1) {
    nodes {
      title
      link
      isoDate
    }
  }
}`
  )

  const [screenHeight, setScreenHeight] = useState(0)
  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, [])

  const contentsNavItems = data.allNavItemYaml.group.find(({ fieldValue }) => fieldValue === "contents")
  const siteNavItems = data.allNavItemYaml.group.find(({ fieldValue }) => fieldValue === "site")

  return (
    <>
      <Helmet>
        <body className={indexBody} />
      </Helmet>
      <Container minH={`${screenHeight}px`}>
        <Grid gridTemplate={[gridTemplateNarrow, gridTemplateNarrow, gridTemplateWide]} h="full">
          <GridItem area="l">
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={data.site.siteMetadata.title} />
          </GridItem>
          <GridItem area="n">
            {
              navItems(contentsNavItems.nodes)
            }
          </GridItem>
          <GridItem area="e">
            {
              navItems(siteNavItems.nodes)
            }
          </GridItem>
          <GridItem area="b">
            {
              Information(data.allFeedAokashiRoom.nodes[0])
            }
            <div className={aboutme}>
              <img src={Icon} alt="Aokashi" className={aboutmeIcon}/>
              {
                socialLinks(data.allSocialLinkYaml)
              }
            </div>
          </GridItem>
        </Grid>
      </Container>
      <Container>
        {children}
      </Container>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

const navItems = (navItems) => (
  <Stack color="white" direction={['row', 'row', 'column']}>
    {
      navItems.map((navItem, navItemIndex) => (
        // TODO リンクの色が白になっていない
        <Link key={navItemIndex} href={navItem.link}>
          <Stack alignItems="center" direction={['column', 'column', 'row']}>
            {
              navItem.icon &&
                <img src={navItem.icon} alt={""} className={styleNavItemIcon} />
            }
            <span className={styleNavItemText}>{navItem.name}</span>
          </Stack>
        </Link>
      ))
    }
  </Stack>
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

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutMeText: PropTypes.string,
}

export default IndexLayout
