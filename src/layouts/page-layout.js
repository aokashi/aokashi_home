/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import BgContent from "../images/ah-background_content.png"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "../components/Link"
import { Box, Button, Container, Grid, GridItem, HStack, Hide, Image, Show, VStack } from "@chakra-ui/react"
import { ClassNames, Global } from "@emotion/react"

const gridTemplateNarrow = `
"h" auto
"t" auto
"m" auto
"f" 1fr
/ 1fr
`

const gridTemplateWide = `
"h h h h h" auto
"n . m . t" auto
"f f f f f" 1fr
/ 200px auto 1fr auto 200px
`

const gridTemplate = [
  gridTemplateNarrow,
  gridTemplateNarrow,
  gridTemplateNarrow,
  gridTemplateWide
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
      <Global
        styles={{
          body: {
            // !important がないと Chakra UI のテーマ設定で上書きされてしまう
            backgroundColor: 'var(--chakra-colors-white)!important',
            backgroundImage: `url(${BgContent})!important`,
            backgroundRepeat: 'repeat',
            backgroundPosition: '0 0'
          }
        }}
      />
      <Grid gridTemplate={gridTemplate} minH="100vh">
        <GridItem area="h">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteNavItems={siteNavItems}
            logoImage={data.file}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="n" bgColor="brand.200">
            <Box as="nav" py={3} position="sticky" top={0}>
              <NavItem href="/" name="Home" />
              {
                contentsNavItems.map((navItem) => (
                  <NavItem key={navItem.name} href={navItem.link} name={navItem.name} />
                ))
              }
            </Box>
          </GridItem>
        </Show>
        {/** Flex や Grid の仕様で minW を 0 に指定しないと大きいコンテンツでオーバーフローする */}
        <GridItem area="m" as="article" minW="0">
          <Container>
            <VStack alignItems="stretch">
              {headerContent &&
                <Box as="header">{headerContent}</Box>
              }
              <Box className="section" p={8}>{children}</Box>
              <Button
                onClick={backToTop}
                leftIcon={<FontAwesomeIcon icon="arrow-up" />}
                variant="jumpTop"
              >
                トップへ戻る
              </Button>
            </VStack>
          </Container>
        </GridItem>
        {sidebarContent &&
          <GridItem area="t" as="aside" bgColor={["silver.300", "silver.300", "silver.300", "transparent"]}>
            {sidebarContent}
          </GridItem>
        }
        <GridItem area="f">
          <Footer siteTitle={data.site.siteMetadata.title} />
        </GridItem>
      </Grid>
      <Hide above="lg">
        <HStack
          as="nav"
          alignItems="center"
          bgColor="silver.300"
          borderTop="2px solid"
          borderColor="brand.800"
          bottom="0"
          justifyContent="stretch"
          position="fixed"
          py={1}
          w="full"
        >
          <ClassNames>
            {({ css }) => data.allNavItemYaml.nodes.map((navItem, navIndex) => {
              if (navItem.type !== "contents") {
                return null
              }
              return (
                <Link
                  key={navIndex}
                  activeClassName={css({ fontWeight: 'bold' })}
                  color="inherit"
                  href={navItem.link}
                  w="full"
                >
                  <VStack spacing={0}>
                    {/** 横持ちで閲覧した場合、なるべく閲覧領域を確保するため幅に上限をもたせる */}
                    <Image src={navItem.icon} alt="" maxW="48px" />
                    <Box>{navItem.name}</Box>
                  </VStack>
                </Link>
              )
            })}
          </ClassNames>
        </HStack>
      </Hide>
    </>
  )
}

const backToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}

Layout.propTypes = {
  headerContent: PropTypes.node,
  sidebarContent: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default Layout
