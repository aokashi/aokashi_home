import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts/page-layout'

import MaterialNavItem from '../../data/materials/navItem.json'
import PageHeader from '../../components/PageHeader'
import InfoNote from '../../components/Note/InfoNote'
import BoxList from '../../components/BoxList'
import ImageMaterialBox from '../../components/Box/ImageMaterialBox'
import ImageModal from '../../components/Modal/ImageModal'

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
      <Layout>
        <PageHeader navItems={MaterialNavItem}>
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
