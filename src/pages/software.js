import React from "react"
import Layout from "../layouts/page-layout"

import SEO from "../components/seo"
import SoftwareData from "../data/software.json"
import PageHeader from "../components/PageHeader"
import BoxList from "../components/BoxList"
import Box from "../components/Box/Box"
import BoxNav from "../components/BoxNav"
import InfoNote from "../components/Note/InfoNote"
import LinkButton from "../components/LinkButton"

const SoftwarePage = () => (
  <Layout>
    <SEO title="ソフトウェア" description="Aokashi Homeのソフトウェアページです。あると便利なツールや、創作を手助けするツールの開発をしています。" />
    <PageHeader>
      <h1>ソフトウェア</h1>
    </PageHeader>
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
  <BoxList>
    {
      SoftwareData.map((item, index) => (
        <Box
          title={item.name}
          width="half"
          key={index}
        >
          <p>{item.description}</p>
          <div>
            {item.keywords.map((keyword, keywordIndex) => (
              <span className="tag" key={keywordIndex}>{keyword}</span>
            ))}
          </div>
          <BoxNav navItems={getLinks(item)} />
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
      "link": softwareItem.repository,
      "name": "GitHub リポジトリ",
    })
  }

  links.concat(softwareItem.references.map((reference) => {
    return {
      "link": reference.url,
      "name": reference.name,
    }
  }))

  return links;
}

export default SoftwarePage
