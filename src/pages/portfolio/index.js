import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../layouts/page-layout'
import PageHeader from '../../components/PageHeader'
import PortfolioList from '../../components/PortfolioList'
import PortfolioItem from '../../components/PortfolioItem'
import PortfolioGroup from '../../components/PortfolioGrouo'

/**
 * 時期の情報です。スラッグがキーになります。
 *     index: 順番 (同じ数字を指定しないこと)
 *     name: 名前 (ポートフォリオの一覧に表示されます)
 */
const seasonDetails = {
  'elementary-school': {
    index: 1,
    name: '小学生',
  },
  'junior-high-school': {
    index: 2,
    name: '中学生',
  },
  'high-school': {
    index: 3,
    name: '高校生'
  },
  'college': {
    index: 4,
    name: '大学生'
  }
}

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
        render={ (data) => {
          const sortedData = data.allMarkdownRemark.group.sort(seasonSorting);

          return (
            <PortfolioList>
              {
                sortedData.map((season, seasonIndex) => {
                  const seasonTitle = seasonDetails[season.nodes[0].frontmatter.season].name;

                  return (
                    <PortfolioGroup title={seasonTitle} key={seasonIndex}>
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
                  )
                })
              }
            </PortfolioList>
          )
        } }
      />
    )
  }
}

/**
 * 各 season のデータからキーを取り出してソートするメソッドです
 *     ## なぜそんなメソッドがあるのか？
 *     GraphQL では group による特定の値による分類分けができますが、分類分けしたグループをソートすることはできません。
 *     (2019-10-30 現在実装途中)
 *     そのため、このポートフォリオページでも、小学生→高校生と時期が飛んで表示されることがあります。
 *     そうならないために、取得したデータから sort メソッドで並び替えるためのメソッドを用意しました。
 * @param {Object} data GraphQLで取得したデータそのもの
 * @param {array} インデックスと名前を順番どおりに配置した配列
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
const seasonSorting = (ownSeasonData, yoursSeasonData) => {
  return seasonDetails[ownSeasonData.nodes[0].frontmatter.season].index >
         seasonDetails[yoursSeasonData.nodes[0].frontmatter.season].index
}

export default PortfolioPage
