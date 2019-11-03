import React from 'react'
import { graphql, Link } from 'gatsby'

import styles from './portfolio-item.module.sass'
import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import renderAst from '../renderAst'
import Carousel from '../components/Carousel'
import convertDate from '../utils/convertDate'

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
      <PageHeader className={styles.header}>
        <div className={styles.summary}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.date}>
            <time datetime={frontmatter.date}>{convertDate(frontmatter.date)}</time>
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
              <Carousel items={frontmatter.images} width={4} height={3} />
          }
        </div>
      </PageHeader>
      <div className="content">
        {
          renderAst(htmlAst)
        }
      </div>
      {
        frontmatter.links &&
          <div className={styles.links}>
            <div className={styles.linksTitle}>関連リンク</div>
            <div className={styles.linksList}>
              {
                frontmatter.links.map((link, linkIndex) => (
                  <a href={link.href} className={styles.link} target={'_blank'} key={linkIndex}>{link.title}</a>
                ))
              }
            </div>
          </div>
      }
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
        date
        images {
          src
          alt
          description
        }
        links {
          href
          title
        }
      }
    }
  }
`

export default PortfolioItemTemplate
