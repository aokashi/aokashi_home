import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
          <h1>WWA素材</h1>
        </PageHeader>
      }>
        <Seo title="WWA素材" description="Aokashi HomeのWWA素材ページです。現代の建物を中心に、凝ったマップが作れます。新作の素材なら、WWAの標準素材との組み合わせに最適！" />
        <div className="content">
          <p>WWAで利用できる素材です。</p>
          <InfoNote>
            <p>セット以外のWWA素材はWWA制作に使う画像ファイルに埋め込む必要があります。</p>
            <ul>
              <li><a href="https://contents.aokashi.net/docs/?WWA/HowToUseMaterial" title="WWA/HowToUseMaterial - Aokashi Home 資料集" target="_blank" rel="noopener noreferrer">埋め込み方は当サイトの旧資料集で知ることができます。</a></li>
            </ul>
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
            <>
              {this.renderTagList(data.allWwaMaterialYaml.group)}
              {this.renderMaterialList(data.allWwaMaterialYaml.nodes)}
            </>
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
      <div className="message is-primary">
        <div className="message-header">
          <p>タグで絞り込み</p>
        </div>
        <div className="message-body">
          <div className="buttons are-small">
            {tagGroups.map(function (tagGroup, tagIndex) {
              const tagValue = tagGroup.fieldValue
              const activeClassName = tagValue === this.state.tagBy ? "is-dark is-active" : ""
              return (
                <button
                  className={`button ${activeClassName}`}
                  onClick={() => this.setTag(tagValue)}
                  key={tagIndex}
                >{tagValue}</button>
              )
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
      <div>
        <div className="message is-primary">
          <div className="message-header">
            <p>並び替え</p>
          </div>
          <div className="message-body">
            <div className="buttons">
              <button
                className={`button ${this.state.sort === "asc" ? "is-dark is-active" : ""}`}
                onClick={() => this.setSort("asc")}
              >昇順</button>
              <button
                className={`button ${this.state.sort === "desc" ? "is-dark is-active" : ""}`}
                onClick={() => this.setSort("desc")}
              >降順</button>
            </div>
          </div>
        </div>
        <BoxList>
          {materialData.map((item) => (
            <ImageMaterialBox
              materialItem={item}
              key={item.name}
              onItemClick={() => this.showPreview(item)}
            />
          ))}
        </BoxList>
      </div>
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
