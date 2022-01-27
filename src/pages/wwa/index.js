import React, { useState } from "react"
import Layout from "../../layouts/page-layout"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import PageHeader from "../../components/PageHeader"
import BoxList from "../../components/BoxList"
import Box from "../../components/Box/Box"
import BoxNav from "../../components/BoxNav"
import WarningNote from "../../components/Note/WarningNote"
import InfoNote from "../../components/Note/InfoNote"

/**
 * WWAページのコンポーネントです。
 *     各ゲームのスクリーンショットは /src/data/wwa/(ゲームのアイテムのid).png でご用意ください
 */
const WWAPage = () => {
  /**
   * WWA Wing対応の絞り込みに使用するステートです。
   */
  const [onlyWWAWing, checkOnlyWWAWing] = useState(true);
  const data = useStaticQuery(graphql`
    query WWADataQuery {
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
      file(relativePath: {eq: "wwawing-logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      allFile(filter: {
        sourceInstanceName: {eq: "data"},
        ext: {eq: ".png"}
      }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
  `)
  const WWAData = data.allWwaYaml.nodes.filter(node => !onlyWWAWing || node.supportWWAWing)

  return (
    <Layout headerContent={<PageHeader><h1>WWA</h1></PageHeader>}>
      <Seo title="WWA" description="Aokashi HomeのWWAページです。広い世界観の中で起こりうる物語と緻密なマップ表現をお楽しみください。" />
      <div className="content">
        <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
        <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
        <InfoNote>
          <p>WWA Wing(JavaScript)ではなくJavaアプレットで動作したい場合はWWA作品のプレイページから <q>Javaアプレットの動作に切り替える</q> のリンクで変更できます。</p>
        </InfoNote>
        <div className="p-2">
          <label className="checkbox">
            <input type="checkbox" onClick={() => checkOnlyWWAWing(!onlyWWAWing)} defaultChecked={onlyWWAWing} />
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="WWA Wing" className="is-inline-block ml-2" /> 対応のWWAのみ表示する
          </label>
        </div> 
        <WarningNote>
          <p>WWA Wing 未対応のWWAをプレイする場合は旧資料集の <a href="https://contents.aokashi.net/docs/?WWA/HowToLaunchJavaWWA" title="WWA/HowToLaunchWWA - Aokashi Home 資料集" target="_blank" rel="noopener noreferrer">JavaアプレットのWWAを動作するには</a> で設定をお願いします。</p>
        </WarningNote>
      </div>
      <BoxList>
        <WWAList wwaData={WWAData} screenImages={data.allFile.nodes} wwaWingLogo={data.file} />
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

const WWAList = ({ wwaData, screenImages, wwaWingLogo }) => wwaData.map((item, index) => {
  // TODO: この処理はビルド時にしか動かないのか？ もしそうであれば、 find メソッドで簡潔にできるかもしれない
  const foundScreenImages = screenImages.filter(screenImageItem => screenImageItem.relativePath === item.screenPath)
  const screenImage = foundScreenImages.length > 0 ? foundScreenImages[0] : null
  return (
    <Box
      title={item.name}
      imagePath={screenImage}
      width="one-third"
      key={index}
      footerContent={<BoxNav navItems={getLinks(item.links)} />}
    >
      {item.supportWWAWing &&
        <div className="has-text-right"><GatsbyImage image={wwaWingLogo.childImageSharp.gatsbyImageData} alt="WWA Wing 対応" /></div>
      }
      <p>{item.description}</p>
    </Box>
  )
})

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
