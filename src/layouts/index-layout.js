import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { chakra, Box, Container, Grid, GridItem, HStack, Image, Stack, Wrap, WrapItem } from "@chakra-ui/react"

import * as styles from "./index-layout.module.sass"
import Link from "../components/Link"
import Footer from "../components/footer"
import Icon from "../images/aokashi-icon.png"
import ProfileBg from "../images/ah-background_profile.png"
import convertDate from "../utils/convertDate"

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
      <Container>
        <Grid gridTemplate={[gridTemplateNarrow, gridTemplateNarrow, gridTemplateWide]} minH={`${screenHeight}px`}>
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
            <HStack backgroundImage={ProfileBg}>
              <Image src={Icon} alt="Aokashi" flex="none" h={["64px", "64px", "128px"]} />
              {
                socialLinks(data.allSocialLinkYaml)
              }
            </HStack>
          </GridItem>
        </Grid>
      </Container>
      <Container backgroundImage={ProfileBg}>
        {children}
      </Container>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

const navItems = (navItems) => (
  <Stack color="white" direction={['row', 'row', 'column']} justifyContent="center" h="full" w="full">
    {
      navItems.map((navItem, navItemIndex) => (
        <Link
          key={navItemIndex}
          _hover={{ color: 'gray.800' }}
          href={navItem.link}
        >
          <Stack alignItems="center" direction={['column', 'column', 'row']}>
            {
              navItem.icon &&
                <img src={navItem.icon} alt={""} />
            }
            <Box fontSize="lg" fontFamily="Nunito" textTransform="uppercase">{navItem.name}</Box>
          </Stack>
        </Link>
      ))
    }
  </Stack>
)

const socialLinks = (socialData) => (
  <Wrap px={5} py={3} spacingX={10} spacingY={3}>
    {
      socialData.nodes.map((socialItem, socialItemIndex) => (
        <WrapItem key={socialItemIndex}>
          <SocialLink socialItem={socialItem}>
            <SocialIcon icon={socialItem.icon} alt={socialItem.name} />
            <chakra.span color="gray.700" ml={2}>
              {socialItem.text}
            </chakra.span>
          </SocialLink>
        </WrapItem>
      ))
    }
  </Wrap>
)

const SocialLink = ({ socialItem, children }) => {
  const titleText = `${socialItem.name} - ${socialItem.text}`;
  if (socialItem.link) {
    return (
      <Link href={socialItem.link} title={titleText} target="_blank" rel="noopener noreferrer">{children}</Link>
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
      <FontAwesomeIcon icon={["fab", icon]} size="2x" />
    )
  } else {
    return (
      <span>{alt}</span>
    )
  }
}

const Information = (data) => (
  <HStack backgroundColor="white" borderTop="2px solid" borderColor="brand.800" px={3} py={2}>
    <Box fontWeight="bold">ブログ記事</Box>
    <Link href={data.link} color="brand.600">
      {data.title}
    </Link>
    <Box color="gray.600" fontSize="sm">
      <time dateTime={data.isoDate}>{convertDate(data.isoDate)}</time>
    </Box>
  </HStack>
)

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutMeText: PropTypes.string,
}

export default IndexLayout
