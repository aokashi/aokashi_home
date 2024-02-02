import React from "react"
import { SimpleGrid, Tag, Wrap } from "@chakra-ui/react"
import Layout from "../layouts/page-layout"

import Seo from "../components/seo"
import SoftwareData from "../data/software.json"
import { BasicPageHeader } from "../components/PageHeader"
import Box from "../components/Box/Box"
import BoxNav from "../components/BoxNav"
import InfoNote from "../components/Note/InfoNote"
import LinkButton from "../components/LinkButton"

const SoftwarePage = () => (
  <Layout headerContent={<BasicPageHeader>ソフトウェア</BasicPageHeader>}>
    <div className="ah-article">
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
          headerContent={(
            <Wrap mt={3}>
              {item.keywords.map((keyword, keywordIndex) => (
                <Tag key={keywordIndex}>{keyword}</Tag>
              ))}
            </Wrap>
          )}
          footerContent={<BoxNav navItems={getLinks(item)} />}
        >
          <p>{item.description}</p>
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

export const Head = () => (
  <Seo title="ソフトウェア" description="Aokashi Homeのソフトウェアページです。あると便利なツールや、創作を手助けするツールの開発をしています。" />
)

export default SoftwarePage
