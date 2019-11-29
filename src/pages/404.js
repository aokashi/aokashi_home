import React from "react"

import Layout from "../layouts/page-layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"

const NotFoundPage = () => (
  <Layout headerContent={
    <PageHeader>
      <h1>404: Not found</h1>
      <h2>ページやファイルが見つかりません</h2>
    </PageHeader>
  }>
    <SEO title="404: Not found" />
    <div className="content">
      <p>Webサイトの整備によって、ページが移転されたり削除されたりする場合があります。お手数ですが、もう一度トップページに戻って目的のコンテンツをお探しください。</p>
    </div>
  </Layout>
)

export default NotFoundPage
