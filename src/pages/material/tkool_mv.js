import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts/page-layout'

import MaterialSidebar from '../../components/MaterialSidebar'
import PageHeader from '../../components/PageHeader'
import InfoNote from '../../components/InfoNote'
import BoxList from '../../components/BoxList'
import ImageMaterialBox from '../../components/ImageMaterialBox'
import Modal from '../../components/Modal'

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
      <Layout sidebarContent={MaterialSidebar()}>
        <PageHeader>
          <h1>RPGツクールMV対応素材</h1>
        </PageHeader>
        <div className="content">
          <p>1マス48×48ピクセルの画像素材です。RPGツクールMVに対応しています。</p>
          <InfoNote>
            <p>RPGツクールMVに対応していますが、RTP素材は含まれていません。RPGツクールMV以外でもご利用できます。</p>
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
    // TODO: 共通化をする
    return (
      <Modal onOutsideClick={() => this.hidePreview()}>
        <div style={{overflow: 'auto'}}>
          <img src={this.state.previewItem.file} alt={this.state.previewItem.name} style={{width: 'auto', height: 'auto'}} />
        </div>
        <div>{this.state.previewItem.name}</div>
        {
          this.state.previewItem.description &&
            <div>{this.state.previewItem.description}</div>
        }
      </Modal>
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
