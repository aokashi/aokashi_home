import React from 'react'

import Layout from '../layouts/page-layout'
import PageHeader from '../components/PageHeader'
import { graphql, Link } from 'gatsby';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioGroup from '../components/PortfolioGrouo';

const PortfolioTagTemplate = ({ pageContext, data }) => {
  const tag = pageContext.tag

  return (
    <Layout>
      <PageHeader>
        <h1>タグ <strong>{tag}</strong> のポートフォリオ項目一覧</h1>
        <Link to={'/portfolio/'}>トップへ戻る</Link>
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
