import React from 'react'
import Layout from '../layouts/page-layout'

import SoftwareData from '../data/software.json'
import BoxList from '../components/BoxList'
import Box from '../components/Box'
import InfoNote from '../components/InfoNote'
import LinkButton from '../components/LinkButton'

const SoftwarePage = () => (
  <Layout>
    <header>
      <h1>ソフトウェア</h1>
    </header>
    <div className="content">
      <p>制作したプログラムを公開しています。基本的にここに公開しているプログラムはすべてGitHubにリポジトリを残しています。以下のリンクからGitHubへアクセスできます。</p>
      <LinkButton href="https://github.com/aokashi">GitHubへアクセス</LinkButton>
      <InfoNote>
        <p>各プログラムのライセンスはGitHubのLICENSEファイルをご参照願います。</p>
      </InfoNote>
    </div>
    {softwareList}
  </Layout>
)

const softwareList = (
  <BoxList className="software-list list">
    {
      SoftwareData.map((item, index) => (
        <Box
          title={item.name}
          className="list__item"
          navItems={getLinks(item)}
          key={index}
        >
          <p>{item.description}</p>
          <div className="item__keywords keywords">
            {
              item.keywords.map((keyword, keywordIndex) => (
                <span className="keywords__item" key={keywordIndex}>{keyword}</span>
              ))
            }
          </div>
        </Box>
      ))
    }
  </BoxList>
)

/**
 * ソフトウェアのデータ項目から、 links を出力します。
 * @param {Object} softwareItem
 * @returns {Array}
 */
function getLinks(softwareItem) {
  let links = [];

  if (softwareItem.repository) {
    links.push({
      'link': softwareItem.repository,
      'name': 'GitHub リポジトリ',
    })
  }

  links.concat(softwareItem.references.map((reference) => {
    return {
      'link': reference.url,
      'name': reference.name,
    }
  }))

  return links;
}

export default SoftwarePage
