import React, { ReactNode } from "react"
import { PageProps, graphql } from "gatsby"
import { Box, Card, CardBody, CardHeader, Grid, GridItem, HStack, Heading, Tag, Text, VStack } from "@chakra-ui/react"
import Layout from "../layouts/index-layout"

import Seo from "../components/seo"
import LinkButton from "../components/LinkButton"

const SectionTitle = ({ children }: { children: ReactNode }) =>
  <Heading as="h2" borderBottom="2px solid" borderColor="brand" p={2} size="md">{children}</Heading>

const IndexPageTemplate = ({ data }: PageProps<Queries.indexPageProfileDataQuery>) => {
  const { mdx } = data
  const { frontmatter } = mdx
  return (
    <Layout>
      <Seo title={frontmatter.title} description="Aokashi のWebサイトです。" />
      <VStack alignItems="stretch" p={8}>
        <Text>{frontmatter.profile.description}</Text>
        <Card variant="profile" my={6}>
          <CardHeader>スキル</CardHeader>
          <CardBody>
            <HStack spacing={2}>
              {frontmatter.profile.skills.map((skill, skillIndex) =>
                <Tag color="white" sx={ { backgroundColor: skill.color } } key={skillIndex}>{skill.name}</Tag>
              )}
            </HStack>
          </CardBody>
        </Card>
        <Grid gap={4} templateColumns={["1fr", "1fr", "2fr 1fr"]}>
          <GridItem>
            <SectionTitle>好きなもの</SectionTitle>
            {
              ProfileSection(frontmatter.profile.items.likes)
            }
          </GridItem>
          <GridItem>
            <SectionTitle>使用環境</SectionTitle>
            {
              ProfileSection(frontmatter.profile.items.environments)
            }
          </GridItem>
        </Grid>
        <Text>{frontmatter.profile.extra}</Text>
      </VStack>
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexPageProfileData {
    mdx( frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        title
        profile {
          description
          skills {
            name
            color
          }
          items {
            likes {
              name
              text
            }
            environments {
              name
              text
              link {
                url
                text
              }
            }
          }
          extra
        }
      }
    }
  }
`

const SectionItem = ({ children }: { children: ReactNode }) => <Box as="section" my={5}>{children}</Box>

// TODO graphql-typegen の型を有効活用したいが、使用すると data.map 内の item が any 扱いされてしまう
const ProfileSection = (data: readonly { name: string, text: string, link?: { url: string, text: string } }[]) => {
  return data.map((item, index) => (
    <SectionItem key={index}>
      <Heading as="h3" size="sm" my={1}>{item.name}</Heading>
      <Text ml={4} my={1}>{item.text}</Text>
      {'link' in item && item.link &&
        <Text ml={4}>
          <LinkButton href={item.link.url}>{item.link.text}</LinkButton>
        </Text>
      }
    </SectionItem>
  ))
}

export default IndexPageTemplate
