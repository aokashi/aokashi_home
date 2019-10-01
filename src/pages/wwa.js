import React from 'react'
import Layout from '../layouts/page-layout'

import WWAGameData from '../data/wwa.json'

const WWAPage = () => (
  <Layout>
    <article>
      <header className="article-header header">
        <h1 className="header__title">WWA</h1>
      </header>
      <div className="article-content content">
        <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
        <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
      </div>
    </article>
    {wwaList}
  </Layout>
)

const wwaList = (
  <div className="wwa-list list">
    {
      WWAGameData.map((item) => (
        <div className="list__item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="item__nav">
            {
              item.links.map((link) => (
                <a href={link.link}>{link.name ? link.name : 'プレイ'}</a>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
)

export default WWAPage
