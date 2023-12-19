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

import {
  pageBody,
  navItem as styleNavItem,
  isActive,
  floatNav,
  navIcon,
  navText
} from "./page-layout.module.sass"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "../components/Link"
import { Box, Button, Container, Grid, GridItem, Hide, Show, VStack } from "@chakra-ui/react"
import { ClassNames } from "@emotion/react"

const gridTemplate = [
  `
  "h" auto
  "t" auto
  "m" 1fr
  "f" auto
  / 1fr
  `,
  `
  "h" auto
  "t" auto
  "m" 1fr
  "f" auto
  / 1fr
  `,
  `
  "h" auto
  "t" auto
  "m" 1fr
  "f" auto
  / 1fr
  `,
  `
  "h h h h h" auto
  "n . m . t" 1fr
  "f f f f f" auto
  / 200px auto 1fr auto 200px
  `
]

const NavItem = ({ href, name }) => (
  <ClassNames>
    {({ css }) => (
      <Button
        as={Link}
        // テーマ側の CSS が優先的に使用されてしまうため、 !important で優先させる
        activeClassName={css({ borderColor: 'var(--chakra-colors-brand-800)!important', fontWeight: 'bold!important' })}
        href={href}
        variant="navItem"
      >
        {name}
      </Button>
    )}
  </ClassNames>
)

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
      file(relativePath: {eq: "ah-logo_mini.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
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
        <body className={pageBody} />
      </Helmet>
      <Grid gridTemplate={gridTemplate}>
        <GridItem area="h">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteNavItems={siteNavItems}
            logoImage={data.file}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="n" as="nav" bgColor="brand.200">
            <NavItem href="/" className={styleNavItem} name="Home" />
            {
              contentsNavItems.map((navItem) => (
                <NavItem key={navItem.name} href={navItem.link} name={navItem.name} />
              ))
            }
          </GridItem>
        </Show>
        <GridItem area="m" as="article">
          <Container>
            <VStack alignItems="stretch">
              {headerContent &&
                <Box as="header">{headerContent}</Box>
              }
              <Box className="section" p={8}>{children}</Box>
              <Button borderRadius={0} colorScheme="gray" onClick={backToTop}>トップへ戻る</Button>
            </VStack>
          </Container>
        </GridItem>
        {sidebarContent &&
          <GridItem area="t" as="aside">
            {sidebarContent}
          </GridItem>
        }
        <GridItem area="f">
          <Footer siteTitle={data.site.siteMetadata.title} />
        </GridItem>
      </Grid>
      <Hide above="lg">
        <div className={floatNav}>
          {
            data.allNavItemYaml.nodes.map((navItem, navIndex) => {
              if (navItem.type !== "contents") {
                return null
              }
              return (
                <Link href={navItem.link} className={styleNavItem} activeClassName={isActive} key={navIndex}>
                  <img src={navItem.icon} alt="" className={navIcon} />
                  <span className={navText}>{navItem.name}</span>
                </Link>
              )
            })
          }
        </div>
      </Hide>
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
