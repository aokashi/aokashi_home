import React from "react"
import Layout from "../../layouts/page-layout"

import PageHeader from "../../components/PageHeader"
import SEO from "../../components/seo"
import WarningNote from "../../components/Note/WarningNote"
import { Link } from "gatsby"

const DocsIndexPage = () => (
  <Layout headerContent={
    <PageHeader>
      <h1>資料集</h1>
    </PageHeader>
  }>
    <SEO title="資料集" description="Aokashi Home の資料集です。自分自身の「あったらいいな」を具現化した世界観の詳細を見ることができます。" />
    <div className="content">
      <p>本サイトの作品で使用している世界観の設定や素材の元ネタなどを公開しています。</p>
      <WarningNote>
        <p>世界観の設定資料については、特別な表記をのぞき <strong>すべて架空です</strong>。表記している人物や地域は実在しません。</p>
      </WarningNote>
      <h2>ページ一覧</h2>
      <ul>
        <li><Link to="world">世界観のページ</Link></li>
      </ul>
    </div>
  </Layout>
)

export default DocsIndexPage
