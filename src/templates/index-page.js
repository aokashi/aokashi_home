import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../layouts/index-layout'

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPageTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <section className="aboutme">
        <h2 className="aboutme__title">{frontmatter.aboutme.heading}</h2>
        <p>{frontmatter.aboutme.description}</p>
        <div className="aboutme__socials socials">
          <a className="socials__item socials__item--twitter" href={`https://twitter.com/${frontmatter.aboutme.socials.twitter}`}>@{frontmatter.aboutme.socials.twitter}</a>
          <a className="socials__item socials__item--github" href={`https://github.com/${frontmatter.aboutme.socials.github}`}>{frontmatter.aboutme.socials.github}</a>
        </div>
        <section className="aboutme__likes">
          <h3>好きなもの</h3>
          {
            frontmatter.aboutme.items.likes.map(item => (
              <section>
                <h4>{item.name}</h4>
                <p>{item.text}</p>
              </section>
            ))
          }
        </section>
        <section className="aboutme__environments">
          <h3>使用環境</h3>
          {
            frontmatter.aboutme.items.environments.map(item => (
              <section>
                <h4>{item.name}</h4>
                <p>{item.text}</p>
              </section>
            ))
          }
        </section>
        <p>{frontmatter.aboutme.extra}</p>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark( frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        title
        aboutme {
          heading
          description
          socials {
            twitter
            github
          }
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

export default IndexPageTemplate
