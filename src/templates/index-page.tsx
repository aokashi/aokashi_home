import React, { ReactNode } from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../layouts/index-layout"

import Seo from "../components/seo"
import Link from "../components/Link"
import { Box, Heading, Text } from "@chakra-ui/react"

const SectionTitle = ({ children }: { children: ReactNode }) => <Heading as="h2" borderBottom="2px solid" borderColor="brand">{children}</Heading>

const IndexPageTemplate = ({ data }: PageProps<Queries.indexPageProfileDataQuery>) => {
  const { mdx } = data
  const { frontmatter } = mdx
  return (
    <Layout>
      <Seo title={frontmatter.title} description="Aokashi のWebサイトです。" />
      <div className="section">
        <p className="block">{frontmatter.profile.description}</p>
        <div className="message">
          <div className="message-header">
            <p>スキル</p>
          </div>
          <div className="message-body">
            <p className="level-item tags is-block">
              {frontmatter.profile.skills.map((skill, skillIndex) =>
                <span className="tag is-black" style={ { backgroundColor: skill.color } } key={skillIndex}>{skill.name}</span>
              )}
            </p>
          </div>
        </div>
        <div className="columns">
          <section className="column is-two-thirds">
            <SectionTitle>好きなもの</SectionTitle>
            {
              ProfileSection(frontmatter.profile.items.likes)
            }
          </section>
          <section className="column is-one-third">
            <SectionTitle>使用環境</SectionTitle>
            {
              ProfileSection(frontmatter.profile.items.environments)
            }
          </section>
        </div>
        <p>{frontmatter.profile.extra}</p>
      </div>
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

const SectionItem = ({ children }: { children: ReactNode }) => <Box as="section" p={2}>{children}</Box>

// TODO graphql-typegen の型を有効活用したいが、使用すると data.map 内の item が any 扱いされてしまう
const ProfileSection = (data: readonly { name: string, text: string, link?: { url: string, text: string } }[]) => {
  return data.map((item, index) => (
    <SectionItem key={index}>
      <Heading as="h3">{item.name}</Heading>
      <Text ml={4}>{item.text}</Text>
      {'link' in item && item.link &&
        <Text ml={4}>
          <Link href={item.link.url} className="button is-primary">{item.link.text}</Link>
        </Text>
      }
    </SectionItem>
  ))
}

export default IndexPageTemplate