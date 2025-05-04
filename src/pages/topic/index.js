import React from "react"
import PageHeader from "../../components/PageHeader"
import Layout from "../../layouts/page-layout"
import SEO from "../../components/seo"

const TopicIndexPage = () => (
  <Layout headerContent={
    <PageHeader>
      <h1>トピック</h1>
    </PageHeader>
  }>
    <SEO title="トピック" description="ナレッジや独自調査などの情報が含まれています。"></SEO>
    <div className="content">
      <p>トピックページでは、管理者 Aokashi が独自に調査した記事やナレッジなどが含まれています。これらの記事は公開後も修正されます。</p>
    </div>
  </Layout>
)

export default TopicIndexPage
