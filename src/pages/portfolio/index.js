import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../layouts/page-layout'
import PageHeader from '../../components/PageHeader'
import PortfolioList from '../../components/PortfolioList'
import PortfolioItem from '../../components/PortfolioItem'

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader>
          <h1>ポートフォリオ</h1>
        </PageHeader>
        {this.renderPortfolioList()}
      </Layout>
    )
  }

  renderPortfolioList() {
    return (
      <StaticQuery
        query={
          graphql`
            query AllPortfolioItemQuery {
              allMarkdownRemark(
                filter: {
                  frontmatter: {
                    path: {
                      glob: "/portfolio/*"
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
                    tags
                    title
                    date(
                      formatString: "YYYY年 MM月 DD日"
                      locale: "ja-JP"
                    )
                    path
                  }
                }
              }
            }
          `
        }
        render={ (data) => (
          <PortfolioList>
            {data.allMarkdownRemark.nodes.map((item, itemIndex) => (
              <PortfolioItem
                position={itemIndex % 2 === 0 ? 'right' : 'left'}
                portfolioItem={item.frontmatter}
                key={itemIndex}
              />
            ))}
          </PortfolioList>
        ) }
      />
    )
  }
}

export default PortfolioPage
