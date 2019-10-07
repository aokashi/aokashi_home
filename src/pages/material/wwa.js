import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts/page-layout'

import PageHeader from '../../components/PageHeader'
import InfoNote from '../../components/InfoNote'
import BoxList from '../../components/BoxList'
import Box from '../../components/Box'

const WWAMaterialPage = () => {

  const wwaMaterialData = useStaticQuery(graphql`
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
  `)

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
      {wwaMaterialList(wwaMaterialData)}
    </Layout>
  )
}

const wwaMaterialList = (materialData) => {
  return (
    <BoxList>
      {
        materialData.allWwaMaterialJson.nodes.map((item, itemIndex) => (
          <Box
            title={item.name}
            className="is-one-third"
            navItems={[{
              link: item.file,
              name: 'ダウンロード',
              isDownloadable: true
            }]}
            key={itemIndex}
          >
            {
              item.description &&
                <p>{item.description}</p>
            }
          </Box>
        ))
      }
    </BoxList>
  )
}

export default WWAMaterialPage
