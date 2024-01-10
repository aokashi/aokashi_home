import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading, Text, VStack } from "@chakra-ui/react"
import Layout from "../../layouts/page-layout"

import Seo from "../../components/seo"
import MaterialNavItem from "../../data/materials/navItem.json"
import PageHeader from "../../components/PageHeader"
import InfoNote from "../../components/Note/InfoNote"
import WarningNote from "../../components/Note/WarningNote"
import BoxList from "../../components/BoxList"
import ImageMaterialBox from "../../components/Box/ImageMaterialBox"
import ImageModal from "../../components/Modal/ImageModal"
import PageHeaderNav from "../../components/PageHeaderNav"
import Link from "../../components/Link"

class WWAMaterialPage extends React.Component {

  constructor() {
    super()
    this.state = {
      isPreview: false,
      sort: 'desc',
      previewItem: {},
      tagBy: "",
    }
  }

  render() {
    return (
      <Layout headerContent={
        <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
          <Heading as="h1" size="lg">WWA素材</Heading>
        </PageHeader>
      }>
        <Seo title="WWA素材" description="Aokashi HomeのWWA素材ページです。現代の建物を中心に、凝ったマップが作れます。新作の素材なら、WWAの標準素材との組み合わせに最適！" />
        <div className="ah-article">
          <p>WWAで利用できる素材です。</p>
          <InfoNote>
            <Text>セット以外のWWA素材はWWA制作に使う画像ファイルに埋め込む必要があります。</Text>
            <Text><Link href="https://blog.wwawing.com/how-to-insert-material/" title="WWA素材をWWAゲームのGIF画像に埋め込むには？ | WWA Wing ブログ">埋め込み方は WWA Wing のブログで知ることができます。</Link></Text>
          </InfoNote>
          <InfoNote>
            <Text>使用サンプルをPixivに掲載しています。参考にどうぞ。</Text>
            <Text><Link href="https://www.pixiv.net/users/24383596">Aokashi - Pixiv</Link></Text>
          </InfoNote>
          <WarningNote>
            <p>タグ「標準素材風」の一部素材には、ＮＡＯさんのＷＷＡ標準素材を使用しています。問題がありましたら、削除する場合があります。</p>
          </WarningNote>
        </div>
        <StaticQuery
          query={graphql`query WWAMaterialDataQuery {
  allWwaMaterialYaml {
    nodes {
      name
      file
      description
      publishedAt
      tags
    }
    group(field: {tags: SELECT}) {
      fieldValue
    }
  }
}`}
          render={data =>
            <VStack alignItems="stretch" spacing={6}>
              {this.renderTagList(data.allWwaMaterialYaml.group)}
              {this.renderMaterialList(data.allWwaMaterialYaml.nodes)}
            </VStack>
          }
        />
        {
          this.state.isPreview &&
            this.renderModal()
        }
      </Layout>
    );
  }

  renderTagList(tagGroups) {
    return (
      <Card>
        <CardHeader><Heading as="h2" size="sm">タグで絞り込み</Heading></CardHeader>
        <CardBody>
          <ButtonGroup flexWrap="wrap" gap={2} my={2} size="sm">
            <>
              {tagGroups.map(
                function (tagGroup, tagIndex) {
                  const tagValue = tagGroup.fieldValue
                  const isActive = tagValue === this.state.tagBy
                  return (
                    <Button
                      key={tagIndex}
                      onClick={() => this.setTag(tagValue)}
                      variant={isActive ? "solid" : "outline"}
                    >
                      {tagValue}
                    </Button>
                  )
                }.bind(this)
              )}
            </>
          </ButtonGroup>
        </CardBody>
        <CardFooter>
          <Button onClick={() => this.setTag("")} variant="outline">
            絞り込みを解除
          </Button>
        </CardFooter>
      </Card>
    )
  }

  /**
   * 絞り込みに使用するタグを設定します。
   * @param {string} tag 設定したいタグ (空文字列で解除)
   */
  setTag(tag) {
    this.setState({
      tagBy: tag
    })
  }

  /**
   * ソートを切り替えます
   * @param {'asc' | 'desc'} sort 
   */
  setSort(sort) {
    this.setState({
      sort
    })
  }

  renderMaterialList(materialNodes) {
    const materialData =
      (
        this.state.tagBy !== ""
          ? materialNodes.filter(node => node.tags.includes(this.state.tagBy))
          : materialNodes
      ).sort((a, b) => {
        const aTime = a.publishedAt ? new Date(a.publishedAt).valueOf() : 0;
        const bTime = b.publishedAt ? new Date(b.publishedAt).valueOf() : 0;
        if (this.state.sort === "asc") {
          return aTime - bTime;
        }
        return bTime - aTime;
      })
    return (
      <>
        <Card>
          <CardHeader><Heading as="h2" size="sm">並び替え</Heading></CardHeader>
          <CardBody>
            <ButtonGroup>
              <Button
                onClick={() => this.setSort("asc")}
                variant={this.state.sort === "asc" ? "solid" : "outline"}
              >
                昇順
              </Button>
              <Button
                onClick={() => this.setSort("desc")}
                variant={this.state.sort === "desc" ? "solid" : "outline"}
              >
                降順
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
        <BoxList>
          {materialData.map((item) => (
            <ImageMaterialBox
              materialItem={item}
              key={item.name}
              onItemClick={() => this.showPreview(item)}
            />
          ))}
        </BoxList>
      </>
    )
  }

  renderModal() {
    return (
      <ImageModal
        src={this.state.previewItem.file}
        alt={this.state.previewItem.name}
        name={this.state.previewItem.name}
        description={this.state.previewItem.description}
        imageBg="rgb(158, 158, 158)"
        onOutsideClick={() => this.hidePreview()}
      />
    )
  }

  showPreview(item) {
    this.setState({
      isPreview: true,
      previewItem: item,
    })
  }

  hidePreview() {
    this.setState({
      isPreview: false,
      previewItem: {},
    })
  }

}

export default WWAMaterialPage
