import React from "react"
import { Heading } from "@chakra-ui/react"

import Layout from "../layouts/page-layout"
import Seo from "../components/seo"
import PageHeader from "../components/PageHeader"

const NotFoundPage = () => (
  <Layout headerContent={
    <PageHeader>
      <Heading as="h1" size="lg">404: Not found</Heading>
      <Heading as="h2" size="md">ページやファイルが見つかりません</Heading>
    </PageHeader>
  }>
    <Seo title="404: Not found" />
    <div className="ah-article">
      <p>Webサイトの整備によって、ページが移転されたり削除されたりする場合があります。お手数ですが、もう一度トップページに戻って目的のコンテンツをお探しください。</p>
    </div>
  </Layout>
)

export default NotFoundPage
