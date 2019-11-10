import React from "react"
import { graphql, Link } from "gatsby"

import styles from "./portfolio-item.module.sass"
import Layout from "../layouts/page-layout"
import PageHeader from "../components/PageHeader"
import renderAst from "../utils/renderAst"
import Carousel from "../components/Carousel"
import convertDate from "../utils/convertDate"
import BackLink from "../components/BackLink"

import DateIcon from "../images/portfolio_items_icon-date.svg"
import TagIcon from "../images/portfolio_items_icon-tag.svg"

const PortfolioItemTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <BackLink to="/portfolio">戻る</BackLink>
      <PageHeader className={styles.header}>
        <div className={styles.summary}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.date}>
            <img src={DateIcon} alt={"日付:"} className={styles.dateIcon} />
            <time datetime={frontmatter.date}>{convertDate(frontmatter.date)}</time>
          </div>
        </div>
        <div className={styles.tags}>
          <img src={TagIcon} alt={"タグ:"} className={styles.tagIcon} />
          {
            frontmatter.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className={styles.tag}>
                <Link to={`/portfolio/tag/${tag}`}>{tag}</Link>
              </span>
            ))
          }
        </div>
          {frontmatter.images &&
            <div className={styles.images}>
              <Carousel items={frontmatter.images} width={4} height={3} />
            </div>
          }
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
                frontmatter.links.map((linkItem, linkIndex) => {
                  if (!linkItem.link) {
                    return <span className={styles.link} key={linkIndex}>{linkItem.name}</span>
                  }

                  return <a href={linkItem.link} className={styles.link} target={"_blank"} key={linkIndex}>{linkItem.name}</a>
                })
              }
            </div>
          </div>
      }
      <BackLink to="/portfolio">戻る</BackLink>
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
          path
          alt
          description
        }
        links {
          link
          name
        }
      }
    }
  }
`

export default PortfolioItemTemplate
