import React from 'react'
import Layout from '../../layouts/page-layout'
import { StaticQuery, graphql } from 'gatsby'

import PageHeader from '../../components/PageHeader'
import LinkButton from '../../components/LinkButton'

class IconPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader>
          <h1>アイコン素材</h1>
        </PageHeader>
        <div className="content">
          <p>アイコンはすべて32×32のサイズに統一しています。</p>
          <StaticQuery
            query={graphql`
              query IconMaterialDataQuery {
                allIconMaterialJson {
                  nodes {
                    name
                    description
                    downloadFile
                    files {
                      src
                      alt
                      background
                    }
                    tags
                  }
                }
              }
            `}
            render={data => (
              <div className="columns is-multiline">
                {
                  data.allIconMaterialJson.nodes.map((item, index) => (
                    <section className="column is-half section" key={index}>
                      <h2>{item.name}</h2>
                      <div className="block">
                        {
                          item.files.map((file, fileIndex) => (
                            <img src={file.src} alt={file.alt} key={fileIndex} />
                          ))
                        }
                      </div>
                      {
                        item.downloadFile &&
                          <div className="block">
                            <LinkButton href={item.downloadFile}>ダウンロード</LinkButton>
                          </div>
                      }
                      <p>{item.description}</p>
                    </section>
                  ))
                }
              </div>
            )}
          />
        </div>
      </Layout>
    )
  }
}

export default IconPage
