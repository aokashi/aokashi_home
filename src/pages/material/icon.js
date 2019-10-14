import React from 'react'
import Layout from '../../layouts/page-layout'
import { StaticQuery, graphql } from 'gatsby'

import MaterialSidebar from '../../components/MaterialSidebar'
import PageHeader from '../../components/PageHeader'
import BoxList from '../../components/BoxList'
import PieceMaterialBox from '../../components/PieceMaterialBox'

class IconPage extends React.Component {
  render() {
    return (
      <Layout sidebarContent={MaterialSidebar()}>
        <PageHeader>
          <h1>アイコン素材</h1>
        </PageHeader>
        <div className="content">
          <p>アイコンはすべて32×32のサイズに統一しています。</p>
          <StaticQuery
            query={graphql`
              query IconMaterialDataQuery {
                allIconMaterialYaml {
                  nodes {
                    name
                    description
                    downloadFile
                    files {
                      src
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
        </div>
      </Layout>
    )
  }
}

export default IconPage
