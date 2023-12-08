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
import Seo from "../../components/seo"

class PortfolioPage extends React.Component {

  render() {
    return (
      <Layout
        headerContent={
          <PageHeader>
            <h1>ポートフォリオ</h1>
          </PageHeader>
        }
        sidebarContent={this.renderSidebar()}
      >
        <Seo title="ポートフォリオ" description="Aokashi のポートフォリオページです。これまで制作したWebサイトやツールなどを見ることができます。" />

        {this.renderPortfolioList()}
        <div className="content">
          <h2>ポートフォリオについて</h2>
          <p>このページは、私 Aokashi がインターネットの世界に踏み出してから現在に至るまでの活動を記録しています。周りの環境からのインプットから始まり、アウトプットを通して自分自身をアップデートしていく軌跡をコンテンツにしました。</p>
          <WarningNote>
            <div>
              <p>URIの禁則文字が含まれるタグについては、含まれないように変更を加えています。予めご了承ください。</p>
              <ul>
                <li>C# → C_Sharp</li>
              </ul>
              <p>また、各ページ内で表示されている人物名はすべて敬称略となります。</p>
            </div>
          </WarningNote>
          <h2>その他のデータ</h2>
          <p>ポートフォリオの項目に載るものではないものの、コンテンツ整理によって行き場を失った作品紹介を掲載しています。</p>
          {this.renderOtherPortfolioList()}
        </div>
      </Layout>
    )
  }

  renderSidebar() {
    return (
      <aside className="menu">
        <ul className="menu-list">
          {Object.keys(seasonDetails).map((seasonId) => (
            <li key={seasonId}>
              <a href={`#${seasonId}`}>{seasonDetails[seasonId].name}</a>
            </li>
          ))}
        </ul>
      </aside> 
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
          graphql`query AllPortfolioItemQuery {
  allMdx(
    filter: {fields: {slug: {glob: "/portfolio/*"}}}
    sort: {frontmatter: {date: ASC}}
  ) {
    group(field: {frontmatter: {season: SELECT}}) {
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
      fieldValue
    }
  }
}`
        }
        render={ (data) => {
          const sortedData = data.allMdx.group.sort(seasonSorting);

          return (
            <PortfolioList>
              {
                sortedData.map((season, seasonIndex) => {
                  const seasonId = season.nodes[0].frontmatter.season;
                  const seasonData = seasonDetails[seasonId];

                  return (
                    <PortfolioGroup
                      seasonId={seasonId}
                      name={seasonData.name}
                      descriptionTitle={seasonData.theme}
                      description={seasonData.description}
                      key={seasonIndex}
                    >
                      {season.nodes.map((item, itemIndex) => (
                        <PortfolioItem
                          portfolioItem={item.frontmatter}
                          slug={item.fields.slug}
                          key={itemIndex}
                        />
                      ))}
                    </PortfolioGroup>
                  )
                })
              }
            </PortfolioList>
          )
        } }
      />
    );
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
