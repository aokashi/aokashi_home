import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../layouts/page-layout'
import PageHeader from '../../components/PageHeader'
import PortfolioList from '../../components/PortfolioList'
import PortfolioItem from '../../components/PortfolioItem'
import PortfolioGroup from '../../components/PortfolioGrouo'

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
                group(field: frontmatter___season) {
                  nodes {
                    frontmatter {
                      date(
                        formatString: "YYYY年 MM月 DD日"
                        locale: "ja-JP"
                      )
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
            }
          `
        }
        render={ (data) => (
          <PortfolioList>
            {
              data.allMarkdownRemark.group.map((season, seasonIndex) => (
                <PortfolioGroup title={this.getSeasonName(seasonIndex)}>
                  {
                    season.nodes.map((item, itemIndex) => (
                      <PortfolioItem
                        position={itemIndex % 2 === 0 ? 'right' : 'left'}
                        portfolioItem={item.frontmatter}
                        key={itemIndex}
                      />
                    ))
                  }
                </PortfolioGroup>
              ))
            }
          </PortfolioList>
        ) }
      />
    )
  }

  /**
   * 時期のインデックスから時期の名前を出力します。
   * @param {number} seasonIndex 時期のインデックス
   * @todo 引数をインデックスではなく文字列にしたい
   */
  getSeasonName(seasonIndex) {
    switch (seasonIndex) {
      case 0:
        return '小学生'
      case 1:
        return '中学生'
      case 2:
        return '高校生'
      default:
        return ''
    }
  }
}

export default PortfolioPage
