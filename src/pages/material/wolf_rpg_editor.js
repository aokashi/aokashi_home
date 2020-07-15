import React from "react";
import Layout from "../../layouts/page-layout";
import PageHeader from "../../components/PageHeader";
import PageHeaderNav from "../../components/PageHeaderNav"
import MaterialNavItem from "../../data/materials/navItem.json"
import SEO from "../../components/seo";
import WarningNote from "../../components/Note/WarningNote"

export default function WolfRPGEditorMaterialPage() {
  return (
    <Layout headerContent={
      <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
        <h1>WOLF RPG エディター素材</h1>
      </PageHeader>
    }>
      <SEO title="WOLF RPG エディター素材" description="Aokashi Home の WOLF RPG エディター対応の素材ページです。タイルサイズが40×40に対応しているものを中心に取り扱っています。" />
      <div className="content">
        <p>WOLF RPG エディターで利用できる素材です。</p>
        <WarningNote>
          <p>本素材はWWA素材から流用している都合上、タイルサイズが40×40に対応しているものがほとんどです。ご使用する場合はタイルサイズを40×40 (解像度が 800×600) に変更する必要があります。変更の際は併用する素材の対応タイルサイズにご注意ください。</p>
        </WarningNote>
      </div>
    </Layout>
  )
}
