import React, { useState } from "react"
import Layout from "../../layouts/page-layout"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import { BasicPageHeader } from "../../components/PageHeader"
import BoxCard from "../../components/Box/Box"
import BoxNav from "../../components/BoxNav"
import WarningNote from "../../components/Note/WarningNote"
import InfoNote from "../../components/Note/InfoNote"
import Link from "../../components/Link"
import { chakra, Box, Card, CardBody, CardHeader, Checkbox, HStack, Heading, SimpleGrid, Stack, Tag, TagLabel, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      allWwaYaml (sort: { publishedAt: DESC }) {
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
    <Layout headerContent={<BasicPageHeader>WWA</BasicPageHeader>}>
      <Seo title="WWA" description="Aokashi HomeのWWAページです。広い世界観の中で起こりうる物語と緻密なマップ表現をお楽しみください。" />
      <div className="ah-article">
        <p><strong>World Wide Adventure</strong> は、RPGゲームが作れるゲームエンジンです。手元のブラウザで動作できますので、WWAゲームにアクセスしてすぐに遊べます。</p>
        <p><a href="https://www.wwajp.com">公式サイト</a> と <a href="https://wwawing.com">WWA Wing</a> でWWAゲームの制作ツールが頒布されています。あなたも、WWAゲームを制作してみませんか？</p>
        <InfoNote>
          <p>ゲームは新しい順で並び替えています。章立てで構成されるゲームについては、初回の投稿日時を基準としています。</p>
        </InfoNote>
        <Checkbox isChecked={onlyWWAWing} onChange={() => checkOnlyWWAWing(!onlyWWAWing)}>
          <Box display="inline-block"><GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="WWA Wing" /></Box> 対応のWWAのみ表示する
        </Checkbox>
        <WarningNote>
          <p>WWA Wing 未対応のWWAをプレイする方法についてはただいま整備中です。</p>
        </WarningNote>
      </div>
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={4}>
        <WWAList wwaData={WWAData} screenImages={data.allFile.nodes} wwaWingLogo={data.file} />
      </SimpleGrid>
      <div className="ah-article">
        <h2>Thanks</h2>
        <WarningNote>
          <p>2019年11月10日当時のリンク先を表示しています。リンク先が変更された場合は、後程対応します。</p>
        </WarningNote>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {WWALicenseList(data.allWwaLicenseYaml)}
        </SimpleGrid>
      </div>
    </Layout>
  )
}

const WWAList = ({ wwaData, screenImages, wwaWingLogo }) => wwaData.map((item) => {
  // TODO: この処理はビルド時にしか動かないのか？ もしそうであれば、 find メソッドで簡潔にできるかもしれない
  const foundScreenImages = screenImages.filter(screenImageItem => screenImageItem.relativePath === item.screenPath)
  const screenImage = foundScreenImages.length > 0 ? foundScreenImages[0] : null
  return (
    <BoxCard
      title={item.name}
      imagePath={screenImage}
      key={item.name}
      headerContent={
        item.supportWWAWing ? (
          <Stack direction="row-reverse" mt={3}>
            <GatsbyImage image={wwaWingLogo.childImageSharp.gatsbyImageData} alt="WWA Wing 対応" />
          </Stack>
        ) : null
      }
      footerContent={<BoxNav navItems={getLinks(item.links)} />}
    >
      <Text>{item.description}</Text>
    </BoxCard>
  )
})

const LICENSE_ICONS = {
  "program": "cog",
  "image": "image",
  "sound": "music",
  "soundfont": "guitar",
}

const WWALicenseList = (data) => data.nodes.map((license) => (
  <Card key={license.name}>
    <CardHeader>
      <Heading as="h3" size="sm">
        <Link href={license.url}>{license.name}</Link>
      </Heading>
      <Text>
        {license.authors.join(", ")}
      </Text>
    </CardHeader>
    <CardBody>
      <HStack wrap="wrap">
        {license.items.map((item) =>
          <Tag size="md" key={item}>
            {LICENSE_ICONS[item] && (
              <chakra.span mr={2}>
                <FontAwesomeIcon icon={LICENSE_ICONS[item]} />
              </chakra.span>
            )}
            <TagLabel>{item}</TagLabel>
          </Tag>
        )}
      </HStack>
      {license.remark &&
        <Text>{license.remark}</Text>
      }
    </CardBody>
  </Card>
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
