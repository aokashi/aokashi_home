import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../../layouts/page-layout"
import PageHeader from "../../components/PageHeader"
import PortfolioList from "../../components/PortfolioList"
import PortfolioItem from "../../components/PortfolioItem"
import PortfolioGroup from "../../components/PortfolioGroup"
import WarningNote from "../../components/Note/WarningNote"
import seasonDetails from "../../data/portfolio/portfolioSeason.yml"
import otherPortfolioItems from "../../data/portfolio/otherItem.yml"
import SEO from "../../components/seo"
import BoxList from "../../components/BoxList"
import Box from "../../components/Box/Box"

class PortfolioPage extends React.Component {

  render() {
    return (
      <Layout headerContent={
        <PageHeader>
          <h1>ポートフォリオ</h1>
        </PageHeader>
      }>
        <SEO title="ポートフォリオ" description="Aokashi のポートフォリオページです。これまで制作したWebサイトやツールなどを見ることができます。" />
        {this.renderPortfolioList()}
      <div className="content">
          <h2>ポートフォリオについて</h2>
          <p>このページは、私 Aokashi がインターネットの世界に踏み出してから現在に至るまでの活動を記録しています。私自身は変化を好む傾向から、あれこれ手を出していまして、その雰囲気を感じ取れたらいいなと思っています。</p>
          <WarningNote>
            <div>
              <p>URIの禁則文字が含まれるタグについては、含まれないように変更を加えています。予めご了承ください。</p>
              <ul>
                <li>C# → C_Sharp</li>
              </ul>
              <p>また、各ページ内で表示されている人物名はすべて敬称略となります。</p>
            </div>
          </WarningNote>
          <h3>おおまかに行ったこと</h3>
          <BoxList>
            <Box title="中学生">
              <p><strong>ホームページの運営や CGI プログラムの設営</strong></p>
              <p>パソコンを扱う職に就きたいと思うようになった。</p>
              <p>知人の影響を受けて、知人のものよりももっと良いものを作ろうと努力し始めた。</p>
            </Box>
            <Box title="高校生">
              <p><strong>プログラミングの学習や自作パソコンの構築</strong></p>
              <p>高校で学習したプログラミングの知識を元に、自分の趣味の間でなにか作れないか模索を開始。ただし、自作パソコンにハマりすぎて思ったとおりのプログラムを作ることはできなかった。</p>
            </Box>
            <Box title="大学生">
              <p><strong>近年の開発手法に関する調査</strong></p>
              <p>高校時代の反省をきっかけに、近年のツールやライブラリ、フレームワークを活用してみるも、機能が多すぎて断念。その後今までの開発方法に制限をかけたり、改修のタスクを頼んだりすることでメリットを実感した。</p>
            </Box>
          </BoxList>
          <h2>その他のデータ</h2>
          <p>ポートフォリオの項目に載るものではないものの、コンテンツ整理によって行き場を失った作品紹介を掲載しています。</p>
          {this.renderOtherPortfolioList()}
        </div>
      </Layout>
    )
  }

  renderPortfolioList() {
    /**
     * FIXME: date(formatString: "YYYY年 MM月 DD日", locale: "ja-JP") で呼び出すと
     *     Unknown argument "formatString" on field "date" of type "MarkdownRemarkFrontmatter" が発生する
     *     現状は諦めて文字列として出力しますが、バージョンアップで修正されていたり、原因が見つかっていたりすれば修正しておきたいです。
     * @see https://github.com/aokashi/aokashi_home/issues/18
     */
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
                      date
                      images {
                        path
                        alt
                      }
                      tags
                      title
                      path
                      season
                    }
                  }
                  fieldValue
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
                    <PortfolioGroup name={seasonTitle} key={seasonIndex}>
                      {
                        season.nodes.map((item, itemIndex) => (
                          <PortfolioItem
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

  renderOtherPortfolioList() {
    return (
      <>
        {
          otherPortfolioItems.map((item, itemIndex) => (
            <section key={itemIndex}>
              <h3>{item.title}</h3>
              {
                item.links &&
                  <ul>
                    {
                      item.links.map((link, linkIndex) => (
                        <li key={linkIndex}><a href={link.link}>{link.name}</a></li>
                      ))
                    }
                  </ul>
              }
              <p>{item.description}</p>
            </section>
          ))
        }
      </>
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
  return seasonDetails[ownSeasonData.fieldValue].index -
         seasonDetails[yoursSeasonData.fieldValue].index
}

export default PortfolioPage
