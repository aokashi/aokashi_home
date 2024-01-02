import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../../layouts/page-layout";
import { Heading } from "@chakra-ui/react";

import PageHeader from "../../components/PageHeader";
import PageHeaderNav from "../../components/PageHeaderNav"
import MaterialNavItem from "../../data/materials/navItem.json"
import Seo from "../../components/seo";
import WarningNote from "../../components/Note/WarningNote"
import BoxList from "../../components/BoxList"
import ImageMaterialBox from "../../components/Box/ImageMaterialBox"
import ImageModal from "../../components/Modal/ImageModal"

export default function WolfRPGEditorMaterialPage() {
  const [isPreview, setPreview] = useState(false)
  const [previewItem, setPreviewItem] = useState(null)

  const showPreview = previewItem => {
    setPreview(true)
    setPreviewItem(previewItem)
  }

  const hidePreview = () => {
    setPreview(false)
    setPreviewItem(null)
  }

  return (
    <Layout headerContent={
      <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
        <Heading as="h1" size="lg">WOLF RPG エディター素材</Heading>
      </PageHeader>
    }>
      <Seo title="WOLF RPG エディター素材" description="Aokashi Home の WOLF RPG エディター対応の素材ページです。タイルサイズが40×40に対応しているものを中心に取り扱っています。" />
      <div className="ah-article">
        <p>WOLF RPG エディターで利用できる素材です。</p>
        <WarningNote>
          <p>本素材はWWA素材から流用している都合上、タイルサイズが40×40に対応しているものがほとんどです。ご使用する場合はタイルサイズを40×40 (解像度が 800×600) に変更する必要があります。変更の際は併用する素材の対応タイルサイズにご注意ください。</p>
        </WarningNote>

        <BoxList>
          <StaticQuery
            query={graphql`
              query WolfRPGEditorMaterialQuery {
                allWolfRpgEditorMaterialYaml {
                  nodes {
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
                  data.allWolfRpgEditorMaterialYaml.nodes.map((item, index) => (
                    <ImageMaterialBox
                      materialItem={item}
                      key={index}
                      onItemClick={() => showPreview(item)}
                    />
                  ))
                }
              </>
            )}
          />
        </BoxList>

        {(isPreview && previewItem !== null) &&
          <ImageModal
            src={previewItem.file}
            alt={previewItem.name}
            name={previewItem.name}
            description={previewItem.description}
            onOutsideClick={() => hidePreview()}
          />
        }

      </div>
    </Layout>
  )
}
