import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import PortfolioItem from '../components/PortfolioItem'
import PortfolioGroup from '../components/PortfolioGrouo'

import TagIcon from '../images/portfolio_items_icon-tag.svg'
import BackLink from '../components/BackLink'

const PortfolioTagTemplate = ({ pageContext, data }) => {
  const tag = pageContext.tag

  return (
    <Layout>
      <BackLink to="/portfolio">トップへ戻る</BackLink>
      <PageHeader image={TagIcon} imageType={'icon'}>
        <h1>タグ <strong>{tag}</strong> のポートフォリオ項目一覧</h1>
      </PageHeader>
      <PortfolioGroup>
        {
          data.allMarkdownRemark.nodes.map((item, itemIndex) => (
            <PortfolioItem
              portfolioItem={item.frontmatter}
              key={itemIndex}
            />
          ))
        }
      </PortfolioGroup>
      <BackLink to="/portfolio">トップへ戻る</BackLink>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PortfolioItemsQueryByTag(
    $tag: String
  ) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          path: {
            glob: "/portfolio/*"
          }
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
        frontmatter {
          date
          images {
            src
            alt
          }
          tags
          title
          path
          season
        }
      }
    }
  }
`

export default PortfolioTagTemplate
