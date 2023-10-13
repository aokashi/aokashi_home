import React from "react"
import { graphql, Link } from "gatsby"

import {
  summary,
  headerIcon,
  images as styleImages
} from "./portfolio-item.module.sass"
import Layout from "../layouts/page-layout"
import PageHeader from "../components/PageHeader"
import Carousel from "../components/Carousel"
import convertDate from "../utils/convertDate"
import BackLink from "../components/BackLink"

import DateIcon from "../images/portfolio_items_icon-date.svg"
import TagIcon from "../images/portfolio_items_icon-tag.svg"
import Seo from "../components/seo"
import AboutNote from "../components/Note/AboutNote"
import TableOfContents from "../components/TableOfContents"
import { MDXProvider } from "@mdx-js/react"

const PortfolioItemTemplate = ({
  data,
  children
}) => {
  const { mdx } = data
  const { frontmatter, tableOfContents } = mdx
  const aboutWords = frontmatter.words
    ? data.allPortfolioAboutWordYaml.nodes.filter(aboutWord => {
      return frontmatter.words.includes(aboutWord.name)
    })
    : []
  return (
    <Layout
      sidebarContent={<TableOfContents body={tableOfContents} />}
      headerContent={<ItemHeader frontmatter={frontmatter} />}
    >
      <Seo title={`ポートフォリオ ${frontmatter.title}`} />
      <BackLink to="/portfolio">戻る</BackLink>
      <div className="content">
        <MDXProvider>
          {children}
        </MDXProvider>
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

const ItemHeader = ({ frontmatter }) => {
  return (
    <PageHeader bottomContent={<PortfolioCarousel images={frontmatter.images} />}>
      <div className={`${summary} block`}>
        <h1>{frontmatter.title}</h1>
        <div>
          <span className={`${headerIcon} icon is-medium`}>
            <img src={DateIcon} alt={"日付:"} />
          </span>
          <time dateTime={frontmatter.date}>{convertDate(frontmatter.date)}</time>
        </div>
        <div className="tags">
          <span className={`${headerIcon} icon is-medium`}>
            <img src={TagIcon} alt={"タグ:"} />
          </span>
          {frontmatter.tags.map((tag, tagIndex) => 
            <Link to={`/portfolio/tag/${tag}`} className="tag" key={tagIndex}>
              {tag}
            </Link>
          )}
        </div>
      </div>
    </PageHeader>
  )
}

const PortfolioCarousel = ({ images }) => {
  if (!images) {
    return null
  }
  /**
   * @param {function} getCurrentSize Gatsby Image オブジェクトから現在のイメージのサイズを取得するメソッド
   */
  const findMaxSize = (getCurrentSize) => {
    return (currentMaxSize, image) => {
      if (image.path.childImageSharp === undefined) {
        return currentMaxSize
      }
      const currentSize = getCurrentSize(image.path)
      return Math.max(currentMaxSize, currentSize)
    }
  }
  const maxWidth = images.reduce(findMaxSize(gatsbyImage => gatsbyImage.childImageSharp.original.width), 1)
  const maxHeight = images.reduce(findMaxSize(gatsbyImage => gatsbyImage.childImageSharp.original.height), 1)

  return (
    <div className={styleImages}>
      <Carousel items={images} width={maxWidth} height={maxHeight} />
    </div>
  )
}

/**
 * @todo allPortfolioAboutWordYaml についてはcontextにwordsを含めた形で gatsby-node.js に移行する
 */
export const pageQuery = graphql`
  query ($path: String!) {
    mdx(
      fields: {
        slug: {
          eq: $path
        }
      }
      frontmatter: {
        template: {
          eq: "portfolio-item"
        }
      }
    ) {
      id
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date
        words
        images {
          path {
            childImageSharp {
              gatsbyImageData
              original {
                height
                width
              }
            }
          }
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
