import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index-layout"

import styles from "./index-page.module.sass"
import SEO from "../components/seo"
import Link from "../components/Link"

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} description="Aokashi のWebサイトです。" />
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
            <h2 className={styles.sectionTitle}>好きなもの</h2>
            {
              ProfileSection(frontmatter.profile.items.likes)
            }
          </section>
          <section className="column is-one-third">
            <h2 className={styles.sectionTitle}>使用環境</h2>
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
  query {
    markdownRemark( frontmatter: { template: { eq: "index-page" } }) {
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

export const ProfileSection = (data) => {
  return data.map((item, index) => (
    <section className={styles.sectionItem} key={index}>
      <h3 className={styles.itemTitle}>{item.name}</h3>
      <p className={styles.itemText}>{item.text}</p>
      {item.link &&
        <p className={styles.itemText}>
          <Link href={item.link.url} className="button is-primary">{item.link.text}</Link>
        </p>
      }
    </section>
  ))
}

export default IndexPageTemplate
