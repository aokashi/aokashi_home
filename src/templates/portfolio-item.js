import React from 'react'
import { graphql, Link } from 'gatsby'

import styles from './portfolio-item.module.sass'
import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import renderAst from '../renderAst'

const PortfolioItemTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <Link to="/portfolio/">戻る</Link>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
        <div className={styles.tags}>
          {
            frontmatter.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className={styles.tag}>{tag}</span>
            ))
          }
        </div>
        <div className={styles.headerImages}>
          {
            frontmatter.images && frontmatter.images.map((image, imageIndex) => (
              <figure key={imageIndex} className={styles.headerImage}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.description}</figcaption>
              </figure>
            ))
          }
        </div>
      </PageHeader>
      <div className="content">
        {
          renderAst(htmlAst)
        }
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(
      frontmatter: {
        path: {
          eq: $path
        }
        template: {
          eq: "portfolio-item"
        }
      }
    ) {
      id
      htmlAst
      frontmatter {
        path
        title
        tags
        images {
          src
          alt
          description
        }
      }
    }
  }
`

export default PortfolioItemTemplate
