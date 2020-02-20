import React, { useState } from "react"
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
  /**
   * WWA Wing対応の絞り込みに使用するステートです。
   */
  const [onlyWWAWing, checkOnlyWWAWing] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      allWwaYaml {
        nodes {
          id
          name
          description
          publishedAt
          screenPath
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
          authors
          url
          items
          remark
        }
      }
    }
  `)
  const WWAData = data.allWwaYaml.nodes.filter(node => !onlyWWAWing || node.supportWWAWing)

  return (
    <Layout headerContent={<PageHeader><h1>WWA</h1></PageHeader>}>
      <SEO title="WWA" description="Aokashi HomeのWWAページです。広い世界観の中で起こりうる物語と緻密なマップ表現をお楽しみください。" />
      <div className="content">
        <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
        <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
        <InfoNote>
          <p>WWA Wing(JavaScript)ではなくJavaアプレットで動作したい場合はWWA作品のプレイページから <q>Javaアプレットの動作に切り替える</q> のリンクで変更できます。</p>
        </InfoNote>
        <label className="checkbox">
          <input type="checkbox" onClick={() => checkOnlyWWAWing(!onlyWWAWing)} defaultChecked={onlyWWAWing} />
          <img src={WWAWingLogo} alt="WWA Wing" /> 対応のWWAのみ表示する
        </label>
        <WarningNote>
          <p>WWA Wing 未対応のWWAをプレイする場合は <a href="https://contents.aokashi.net/docs/?WWA/HowToLaunchJavaWWA">JavaアプレットのWWAを動作するには</a> で設定をお願いします。</p>
        </WarningNote>
      </div>
      <BoxList>
        {WWAList(WWAData)}
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

const WWAList = nodes => nodes.map((item, index) =>
  <Box
    title={item.name}
    imagePath={item.screenPath}
    width="one-third"
    key={index}
    footerContent={<BoxNav navItems={getLinks(item.links)} />}
  >
    {item.supportWWAWing &&
      <div className="has-text-right"><img src={WWAWingLogo} alt="WWA Wing対応" /></div>
    }
    <p>{item.description}</p>
  </Box>
)

const WWALicenseList = (data) => data.nodes.map((license, licenseIndex) => (
  <div className="column is-one-third" key={licenseIndex}>
    <div className="card">
      <div className="card-content">
        <div className="title is-5">
          <a href={license.url} target="_blank" rel="noopener noreferrer">{license.name}</a>
        </div>
        <div className="subtitle is-6">
          {license.authors.join(", ")}
        </div>
        <div className="tags">
          {license.items.map((item, index) =>
            <span className="tag" key={index}>{item}</span>
          )}
        </div>
        {license.remark &&
          <div className="block">
            <p>{license.remark}</p>
          </div>
        }
      </div>
    </div>
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
