import React from 'react'
import Layout from '../layouts/page-layout'

import WWAGameData from '../data/wwa.json'

import PageHeader from '../components/PageHeader'
import BoxList from '../components/BoxList'
import Box from '../components/Box/Box'
import BoxNav from '../components/BoxNav'

const WWAPage = () => (
  <Layout>
    <PageHeader>
      <h1>WWA</h1>
    </PageHeader>
    <div className="content">
      <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
      <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
    </div>
    {wwaList}
  </Layout>
)

const wwaList = (
  <BoxList className="wwa-list">
    {
      WWAGameData.map((item, index) => (
        <Box
          title={item.name}
          className="is-one-third wwa-item"
          key={index}
        >
          <img src={`/images/wwa_screens/${item.id}.gif`} alt="" className="wwa-item__screen" />
          <p className="wwa-item__description">{item.description}</p>
          <BoxNav navItems={getLinks(item.links)} />
        </Box>
      ))
    }
  </BoxList>
)

/**
 * WWA作品の links を出力します。
 * @param {array} links
 * @returns {Array}
 */
function getLinks (links) {
  return links.map((linkItem) => {
    return {
      "link": linkItem.link,
      "name": linkItem.name ? linkItem.name : 'プレイ'
    }
  })
}

export default WWAPage
