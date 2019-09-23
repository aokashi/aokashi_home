import React from 'react'
import Layout from '../layouts/page-layout'
import { graphql } from 'gatsby'

import WWAGameData from '../data/wwa.json'

const WWATemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <article>
        <header className="article-header header">
          <h1 className="header__title">{frontmatter.title}</h1>
        </header>
        <div
          className="article-content content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="wwa-list list">
        {
          WWAGameData.map((item) => (
            <div className="list__item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="item__nav">
                {
                  item.links.map((link) => (
                    <a href={link.link}>{link.name ? link.name : 'プレイ'}</a>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark( frontmatter: { template: { eq: "wwa-page" } }) {
      id
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default WWATemplate
