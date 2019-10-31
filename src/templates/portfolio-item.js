import React from 'react'
import { graphql, Link } from 'gatsby'

import styles from './portfolio-item.module.sass'
import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import renderAst from '../renderAst'
import Carousel from '../components/Carousel'

const PortfolioItemTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const backLink = (
    <Link to="/portfolio/" className={styles.backLink}>戻る</Link>
  )
  return (
    <Layout>
      {backLink}
      <PageHeader>
        <div className={styles.summary}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.date}>
            {frontmatter.date}
          </div>
        </div>
        <div className={styles.tags}>
          {
            frontmatter.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className={styles.tag}>{tag}</span>
            ))
          }
        </div>
        <div className={styles.images}>
          {
            frontmatter.images &&
              <Carousel items={frontmatter.images} width={16} height={9} />
          }
        </div>
      </PageHeader>
      <div className="content">
        {
          renderAst(htmlAst)
        }
      </div>
      {backLink}
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
        date(
          formatString: "YYYY年 MM月 DD日"
          locale: "ja-JP"
        )
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
