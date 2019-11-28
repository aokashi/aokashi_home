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
import SEO from "../components/seo"
import AboutNote from "../components/Note/AboutNote"

const PortfolioItemTemplate = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const aboutWords = frontmatter.words
    ? data.allPortfolioAboutWordYaml.nodes.filter(aboutWord => {
      return frontmatter.words.includes(aboutWord.name)
    })
    : []
  return (
    <Layout>
      <SEO title={`ポートフォリオ ${frontmatter.title}`} />
      <PageHeader className={styles.header}>
        <div className={`${styles.summary} block`}>
          <h1>{frontmatter.title}</h1>
          <div>
            <span className={`${styles.headerIcon} icon is-medium`}>
              <img src={DateIcon} alt={"日付:"} />
            </span>
            <time dateTime={frontmatter.date}>{convertDate(frontmatter.date)}</time>
          </div>
          <div className="tags">
            <span className={`${styles.headerIcon} icon is-medium`}>
              <img src={TagIcon} alt={"タグ:"} />
            </span>
            {frontmatter.tags.map((tag, tagIndex) => 
              <Link to={`/portfolio/tag/${tag}`} className="tag" key={tagIndex}>
                {tag}
              </Link>
            )}
          </div>
        </div>
        {frontmatter.images &&
          <div className={styles.images}>
            <Carousel items={frontmatter.images} width={4} height={3} />
          </div>
        }
      </PageHeader>
      <BackLink to="/portfolio">戻る</BackLink>
      <div className="content">
        {
          renderAst(htmlAst)
        }
        {frontmatter.links &&
          <>
            <h2>関連リンク</h2>
            <ul>
              {frontmatter.links.map((linkItem, linkIndex) => {
                if (!linkItem.link) {
                  return <li key={linkIndex}>{linkItem.name}</li>
                }
  
                return (
                  <li key={linkIndex}>
                    <a href={linkItem.link} className="link" target="_blank" rel="noopener noreferrer">{linkItem.name}</a>
                  </li>
                )
              })}
            </ul>
          </>
        }
      </div>
      {frontmatter.words &&
        <div className="content">
          {aboutWords.map((aboutWordItem, aboutWordIndex) => 
            <AboutNote title={aboutWordItem.title} key={aboutWordIndex}>
              {aboutWordItem.description.split("\n").map((line, lineIndex) =>
                <p key={lineIndex}>{line}</p>
              )}
              {aboutWordItem.links &&
                <ul>
                  {aboutWordItem.links.map((wordLink, wordLinkIndex) =>
                    <li key={wordLinkIndex}>
                      <a href={wordLink.link} target="_blank" rel="noopener noreferrer">{wordLink.name}</a>
                    </li>
                  )}
                </ul>
              }
            </AboutNote>
          )}
        </div>
      }
      <BackLink to="/portfolio">戻る</BackLink>
    </Layout>
  )
}

/**
 * @todo allPortfolioAboutWordYaml についてはcontextにwordsを含めた形で gatsby-node.js に移行する
 */
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
        words
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
    allPortfolioAboutWordYaml {
      nodes {
        name
        title
        description
        links {
          link
          name
        }
      }
    }
  }
`

export default PortfolioItemTemplate
