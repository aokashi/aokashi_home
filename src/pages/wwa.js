import React from "react"
import Layout from "../layouts/page-layout"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import BoxList from "../components/BoxList"
import Box from "../components/Box/Box"
import BoxNav from "../components/BoxNav"
import WarningNote from "../components/Note/WarningNote"
import InfoNote from "../components/Note/InfoNote"
import WWAWingLogo from "../images/wwawing-logo.png"

const WWAPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWwaYaml {
        nodes {
          id
          name
          description
          publishedAt
          links {
            name
            link
          }
          supportWWAWing
        }
      }
      allWwaLicenseYaml {
        nodes {
          name
          url
          items
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="WWA" description="Aokashi HomeのWWAページです。広い世界観の中で起こりうる物語と緻密なマップ表現をお楽しみください。" />
      <PageHeader>
      <h1>WWA</h1>
      </PageHeader>
      <div className="content">
        <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
        <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
        <InfoNote>
          <p>WWA Wing(JavaScript)ではなくJavaアプレットで動作したい場合はWWA作品のプレイページから <q>Javaアプレットの動作に切り替える</q> のリンクで変更できます。</p>
          <p>WWA Wing 未対応のWWAをプレイする場合は JavaアプレットのWWAを動作するには で設定をお願いします。</p>
        </InfoNote>
      </div>
      <BoxList>
        {WWAList(data.allWwaYaml)}
      </BoxList>
      <div className="content">
        <h2>Thanks</h2>
        <WarningNote>
          <p>2019年11月10日当時のリンク先を表示しています。リンク先が変更された場合は、後程対応します。</p>
        </WarningNote>
        <div className="columns is-multiline">
          {WWALicenseList(data.allWwaLicenseYaml)}
        </div>
      </div>
    </Layout>
  )
}

const WWAList = (data) => data.nodes.map((item, index) => (
  <Box
    title={item.name}
    className="is-one-third"
    key={index}
  >
    <img src={`/images/wwa_screens/${item.id}.gif`} alt="" />
    {item.supportWWAWing &&
      <div className="has-text-right"><img src={WWAWingLogo} alt="WWA Wing対応" /></div>
    }
    <p>{item.description}</p>
    <BoxNav navItems={getLinks(item.links)} />
  </Box>
))

const WWALicenseList = (data) => data.nodes.map((license, licenseIndex) => (
  <div className="column is-one-third" key={licenseIndex}>
    <div><strong><a href={license.url} target="_blank" rel="noopener noreferrer">{license.name}</a></strong></div>
    <div>{license.author}</div>
    {license.items.join(", ")}
  </div>
))

/**
 * WWA作品の links を出力します。
 * @param {array} links
 * @returns {Array}
 */
function getLinks (links) {
  return links.map(linkItem => {
    return {
      "link": linkItem.link,
      "name": linkItem.name ? linkItem.name : "プレイ"
    }
  })
}

export default WWAPage
