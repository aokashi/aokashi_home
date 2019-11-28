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
      tagBy: "",
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
            <ul>
              <li><a href="https://contents.aokashi.net/docs/?WWA/HowToUseMaterial">埋め込み方は当サイトの資料集で知ることができます。</a></li>
            </ul>
          </InfoNote>
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
                  group(field: tags) {
                    fieldValue
                  }
                }
              }
            `}
            render={data =>
              <>
                {this.renderTagList(data.allWwaMaterialYaml.group)}
                {this.renderMaterialList(data.allWwaMaterialYaml.nodes)}
              </>
            }
          />
        </div>
        {
          this.state.isPreview &&
            this.renderModal()
        }
      </Layout>
    )
  }

  renderTagList(tagGroups) {
    return (
      <div className="message is-primary">
        <div className="message-header">
          <p>タグで絞り込み</p>
        </div>
        <div className="message-body">
          <div className="tags">
            {tagGroups.map(function (tagGroup, tagIndex) {
              const tagValue = tagGroup.fieldValue
              const activeClassName = tagValue === this.state.tagBy ? "is-dark" : ""
              return <span className={`tag ${activeClassName}`} onClick={() => this.setTag(tagValue)} key={tagIndex}>{tagValue}</span>
            }.bind(this))}
          </div>
          <div className="buttons">
            {this.state.tagBy !== "" &&
              <button className="button" onClick={() => this.setTag("")}>絞り込みを解除</button>
            }
          </div>
        </div>
      </div>
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

  renderMaterialList(materialNodes) {
    const materialData = this.state.tagBy !== ""
      ? materialNodes.filter(node => node.tags.includes(this.state.tagBy))
      : materialNodes
    return (
      <BoxList>
        {materialData.map((item, itemIndex) => (
          <ImageMaterialBox
            materialItem={item}
            key={itemIndex}
            onItemClick={() => this.showPreview(item)}
          />
        ))}
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
