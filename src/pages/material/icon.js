import React from "react"
import Layout from "../../layouts/page-layout"
import { StaticQuery, graphql } from "gatsby"
import { Heading } from "@chakra-ui/react"

import Seo from "../../components/seo"
import MaterialNavItem from "../../data/materials/navItem.json"
import PageHeader from "../../components/PageHeader"
import BoxList from "../../components/BoxList"
import PieceMaterialBox from "../../components/Box/PieceMaterialBox"
import PageHeaderNav from "../../components/PageHeaderNav"

class IconPage extends React.Component {
  render() {
    return (
      <Layout headerContent={
        <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
          <Heading as="h1" size="lg">アイコン素材</Heading>
        </PageHeader>
      }>
        <div className="ah-article">
          <p>アイコンはすべて32×32のサイズに統一しています。</p>
        </div>
        <StaticQuery
          query={graphql`
            query IconMaterialDataQuery {
              allIconMaterialYaml {
                nodes {
                  name
                  description
                  downloadFile
                  files {
                    path
                    alt
                    note
                  }
                  tags
                }
              }
            }
          `}
          render={data => (
            <BoxList>
              {
                data.allIconMaterialYaml.nodes.map((item, index) => (
                  <PieceMaterialBox
                    materialItem={item}
                    key={index}
                  />
                ))
              }
            </BoxList>
          )}
        />
      </Layout>
    )
  }
}

export const Head = () => (
  <Seo title="アイコン素材" description="Aokashi Homeのアイコン素材は32×32のサイズの建物で取り扱っています。元々CGIゲームのTOWN用に制作したものですが、今でもマップ制作におすすめです。" />
)

export default IconPage
