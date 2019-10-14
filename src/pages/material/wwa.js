import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts/page-layout'

import MaterialSidebar from '../../components/Sidebar/MaterialSidebar'
import PageHeader from '../../components/PageHeader'
import InfoNote from '../../components/Note/InfoNote'
import BoxList from '../../components/BoxList'
import ImageMaterialBox from '../../components/Box/ImageMaterialBox'
import ImageModal from '../../components/Modal/ImageModal'

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
      <Layout sidebarContent={MaterialSidebar()}>
        <PageHeader>
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
