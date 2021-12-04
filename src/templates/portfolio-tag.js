import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/page-layout"
import { IconPageHeader } from "../components/PageHeader"
import PortfolioItem from "../components/PortfolioItem"
import PortfolioGroup from "../components/PortfolioGroup"

import TagIcon from "../images/portfolio_items_icon-tag.svg"
import BackLink from "../components/BackLink"

const PortfolioTagTemplate = ({ pageContext, data }) => {
  const tag = pageContext.tag

  return (
    <Layout headerContent={
      <IconPageHeader image={TagIcon}>
        <h1>タグ <strong>{tag}</strong> のポートフォリオ項目一覧</h1>
      </IconPageHeader>
    }>
      <BackLink to="/portfolio">ポートフォリオ トップ</BackLink>
      <PortfolioGroup>
        {
          data.allMdx.nodes.map((item, itemIndex) => (
            <PortfolioItem
              portfolioItem={item.frontmatter}
              slug={item.fields.slug}
              key={itemIndex}
            />
          ))
        }
      </PortfolioGroup>
      <BackLink to="/portfolio">ポートフォリオ トップ</BackLink>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PortfolioItemsQueryByTag(
    $tag: String
  ) {
    allMdx(
      filter: {
        fields: {
          slug: {
            glob: "/portfolio/*"
          }
        }
        frontmatter: {
          tags: {
            in: [$tag]
          }
        }
      }
      sort: {
        fields: [frontmatter___date]
        order: ASC
      }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          images {
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
          tags
          title
          season
        }
      }
    }
  }
`

export default PortfolioTagTemplate
