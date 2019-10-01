import React from 'react'
import Layout from '../layouts/page-layout'

import SoftwareData from '../data/software.json'
import InfoNote from '../components/InfoNote'

const SoftwarePage = () => (
  <Layout>
    <article>
      <header className="article-header header">
        <h1 className="header__title">ソフトウェア</h1>
      </header>
      <div className="article-content content">
        <p>制作したプログラムを公開しています。基本的にここに公開しているプログラムはすべてGitHubにリポジトリを残しています。以下のリンクからGitHubへアクセスできます。</p>
        <a className="link-button" href="https://github.com/aokashi">GitHubへアクセス</a>
        <InfoNote>
          <p>各プログラムのライセンスはGitHubのLICENSEファイルをご参照願います。</p>
        </InfoNote>
      </div>
    </article>
    {softwareList}
  </Layout>
)

const softwareList = (
  <div className="software-list list">
    {
      SoftwareData.map((item, index) => (
        <div className="list__item" key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="item__keywords keywords">
            {
              item.keywords.map((keyword, keywordIndex) => (
                <span className="keywords__item" key={keywordIndex}>{keyword}</span>
              ))
            }
          </div>
          <div className="item__nav nav">
            {
              item.repository &&
                <a className="nav__item nav__item--github-repo" href={item.repository}>GitHub リポジトリ</a>
            }
            {
              item.references.map((link, linkIndex) => (
                <a className="nav__item" href={link.url} key={linkIndex}>{link.name}</a>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
)

export default SoftwarePage
