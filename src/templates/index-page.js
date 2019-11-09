import React from 'react'
import { graphql } from "gatsby"
import Layout from '../layouts/index-layout'

import styles from './index-page.module.sass'
import SEO from "../components/seo"

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={styles.profile}>
        <div className={styles.profileDescription}>
          <p>{frontmatter.profile.description}</p>
        </div>
        <div className={`${styles.profileExtra} columns`}>
          <section className={`${styles.section} ${styles.profileLikes} column is-half`}>
            <h2 className={styles.sectionTitle}>好きなもの</h2>
            {
              ProfileSection(frontmatter.profile.items.likes)
            }
          </section>
          <section className={`${styles.section} ${styles.profileEnvironments} column is-half`}>
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
        profile {
          description
          items {
            likes {
              name
              text
            }
            environments {
              name
              text
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
    <section className={styles.item} key={index}>
      <h3 className={styles.itemTitle}>{item.name}</h3>
      <p className={styles.itemText}>{item.text}</p>
    </section>
  ))
}

export default IndexPageTemplate
