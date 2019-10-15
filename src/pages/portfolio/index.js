import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../layouts/page-layout'
import PageHeader from '../../components/PageHeader'
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
          <div className="columns">
            {data.allMarkdownRemark.nodes.map((item, itemIndex) => (
              <PortfolioItem
                position={itemIndex % 2 === 0 ? 'right' : 'left'}
                portfolioItem={item.frontmatter}
                key={itemIndex}
              />
            ))}
          </div>
        ) }
      />
    )
  }
}

export default PortfolioPage
