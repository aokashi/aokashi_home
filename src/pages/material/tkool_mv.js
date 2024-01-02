import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../../layouts/page-layout"
import { Heading } from "@chakra-ui/react"

import MaterialNavItem from "../../data/materials/navItem.json"
import PageHeader from "../../components/PageHeader"
import InfoNote from "../../components/Note/InfoNote"
import BoxList from "../../components/BoxList"
import ImageMaterialBox from "../../components/Box/ImageMaterialBox"
import ImageModal from "../../components/Modal/ImageModal"
import Seo from "../../components/seo"
import PageHeaderNav from "../../components/PageHeaderNav"

class TkoolMvPage extends React.Component {

  constructor() {
    super()
    this.state = {
      isPreview: false,
      previewItem: {},
    }
  }
  
  render() {
    return (
      <Layout headerContent={
        <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
          <Heading as="h1" size="lg">RPGツクールMV/MZ対応素材</Heading>
        </PageHeader>
      }>
        <Seo title="RPGツクールMV/MZ対応素材" description="RPGツクールMVとRPGツクールMZ対応の素材です。数は少ないですが、RPGツクール標準の素材に並べても違和感のないように仕上げています。" />
        <div className="ah-article">
          <p>1マス48×48ピクセルの画像素材です。RPGツクールMVとRPGツクールMZに対応しています。</p>
          <InfoNote>
            <p>特に表記がない場合は、画像素材のコピーとペーストでゲームの素材に組み込む必要があります。</p>
          </InfoNote>
          <InfoNote>
            <p>RPGツクールMVとRPGツクールMZに対応していますが、RTP素材は含まれていません。RPGツクール以外でもご利用できます。</p>
          </InfoNote>
        </div>
        {this.renderMaterialList()}
        {
          this.state.isPreview &&
            this.renderModal()
        }
      </Layout>
    )
  }

  renderMaterialList() {
    return (
      <BoxList>
        <StaticQuery
          query={graphql`
            query TkoolMvMaterialDataQuery {
              allTkoolMvMaterialYaml {
                nodes {
                  description
                  file
                  name
                  tags
                }
              }
            }
          `}
          render={data => (
            <>
              {
                data.allTkoolMvMaterialYaml.nodes.map((item, index) => (
                  <ImageMaterialBox
                    materialItem={item}
                    key={index}
                    onItemClick={() => this.showPreview(item)}
                  />
                ))
              }
            </>
          )}
        />
      </BoxList>
    )
  }

  renderModal() {
    return (
      <ImageModal
        src={this.state.previewItem.file}
        alt={this.state.previewItem.name}
        name={this.state.previewItem.name}
        description={this.state.previewItem.description}
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

export default TkoolMvPage
