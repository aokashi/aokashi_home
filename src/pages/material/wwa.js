import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts/page-layout'

import PageHeader from '../../components/PageHeader'
import InfoNote from '../../components/InfoNote'
import BoxList from '../../components/BoxList'
import MaterialBox from '../../components/MaterialBox'
import Modal from '../../components/Modal'

class WWAMaterialPage extends React.Component {

  constructor() {
    super()
    this.state = {
      isPreview: false,
      previewFile: '',
      previewAlt: '',
    }
  }

  render() {

    return (
      <Layout>
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
            <Modal onOutsideClick={() => this.hidePreview()}>
              <img src={this.state.previewFile} alt={this.state.previewAlt} />
            </Modal>
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
              allWwaMaterialJson {
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
                data.allWwaMaterialJson.nodes.map((item, itemIndex) => (
                  <MaterialBox
                    materialItem={item}
                    key={itemIndex}
                    onItemClick={() => this.showPreview(item.file, item.name)}
                  />
                ))
              }
            </>
          )}
        />
      </BoxList>
    )
  }

  showPreview(imageSrc, imageAlt) {
    this.setState({
      isPreview: true,
      previewFile: imageSrc,
      previewAlt: imageAlt,
    })
  }

  hidePreview() {
    this.setState({
      isPreview: false,
    })
  }

}

export default WWAMaterialPage
