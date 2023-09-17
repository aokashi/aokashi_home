import React from "react"
import Layout from "../layouts/page-layout"

import Seo from "../components/seo"
import SoftwareData from "../data/software.json"
import PageHeader from "../components/PageHeader"
import Box from "../components/Box/Box"
import BoxNav from "../components/BoxNav"
import InfoNote from "../components/Note/InfoNote"
import LinkButton from "../components/LinkButton"
import { SimpleGrid } from "@chakra-ui/react"

const SoftwarePage = () => (
  <Layout headerContent={<PageHeader><h1>ソフトウェア</h1></PageHeader>}>
    <Seo title="ソフトウェア" description="Aokashi Homeのソフトウェアページです。あると便利なツールや、創作を手助けするツールの開発をしています。" />
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
  <SimpleGrid columns={[1, 2, 3]} spacing={4}>
    {
      SoftwareData.map((item) => (
        <Box
          title={item.name}
          width="half"
          key={item.name}
          footerContent={<BoxNav navItems={getLinks(item)} />}
        >
          <p>{item.description}</p>
          <div className="tags">
            {item.keywords.map((keyword, keywordIndex) => (
              <span className="tag" key={keywordIndex}>{keyword}</span>
            ))}
          </div>
        </Box>
      ))
    }
  </SimpleGrid>
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
      "fa": "github",
    })
  }

  softwareItem.references.forEach((reference) => {
    links.push({
      "link": reference.url,
      "name": reference.name,
    })
  })

  return links
}

export default SoftwarePage
