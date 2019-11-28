import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../../layouts/page-layout"

import SEO from "../../components/seo"
import MaterialNavItem from "../../data/materials/navItem.json"
import PageHeader from "../../components/PageHeader"
import InfoNote from "../../components/Note/InfoNote"
import BoxList from "../../components/BoxList"
import ImageMaterialBox from "../../components/Box/ImageMaterialBox"
import ImageModal from "../../components/Modal/ImageModal"

class WWAMaterialPage extends React.Component {

  constructor() {
    super()
    this.state = {
      isPreview: false,
      previewItem: {},
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="WWA素材" description="Aokashi HomeのWWA素材ページです。現代の建物を中心に、凝ったマップが作れます。新作の素材なら、WWAの標準素材との組み合わせに最適！" />
        <PageHeader navItems={MaterialNavItem}>
          <h1>WWA素材</h1>
        </PageHeader>
        <div className="content">
          <p>WWAで利用できる素材です。</p>
          <InfoNote>
            <p>セット以外のWWA素材はWWA制作に使う画像ファイルに埋め込む必要があります。</p>
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
            query WWAMaterialDataQuery {
              allWwaMaterialYaml {
                nodes {
                  name
                  file
                  description
                  publishedAt
                  tags
                }
              }
            }
          `}
          render={data => (
            <>
              {
                data.allWwaMaterialYaml.nodes.map((item, itemIndex) => (
                  <ImageMaterialBox
                    materialItem={item}
                    key={itemIndex}
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

export default WWAMaterialPage
