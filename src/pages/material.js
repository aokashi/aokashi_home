import React from "react"
import Layout from "../layouts/page-layout"
import { Heading } from "@chakra-ui/react"

import Seo from "../components/seo"
import MaterialNavItem from "../data/materials/navItem.json"
import PageHeader from "../components/PageHeader"
import WarningNote from "../components/Note/WarningNote"
import PageHeaderNav from "../components/PageHeaderNav"

const MaterialIndexPage = () => (
  <Layout headerContent={
    <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
      <Heading as="h1" size="lg">素材</Heading>
    </PageHeader>
  }>
    <Seo title="素材" description="Aokashi Homeの素材はWWAや建物のアイコンなどを取り扱っています。総数は200件以上！" />
    <div className="ah-article">
      <p>作品の制作に利用できる素材やライブラリ、アセットを公開しています。</p>
      <h2>ご利用について</h2>
      <p>当サイトでは、なるべく多くの方に利用してもらえるように、ここの素材やライブラリの利用制限はなるべく最小限に留めています。 <strong>「このサイト (Aokashi Home) から利用した」</strong> という表記を含めていただければ、ご自由にご利用できます。加工も自由です(また、画像を重ねるような加工が前提としたものもあります)。</p>
      <ul>
        <li>出典の表記についてはご自由に決めていただいて構いませんが、 <strong>なるべくネットの検索で辿れるような形で</strong> 表記をお願いします</li>
        <li>出典を表記しなくても特別に注意されることはありませんが、 <strong>出典は偽らないでください</strong> (利用者が当サイトの素材のことを自分が作った と言うことはできません)</li>
      </ul>
      <WarningNote>
        <p>画像素材を利用する場合は、対象の素材をそのままクリックすることでダウンロードできます。</p>
      </WarningNote>
      <h2>使用ツール</h2>
      <ul>
        <li><a href="http://takabosoft.com/edge2" target="_blank" rel="noopener noreferrer"><img src="https://contents.aokashi.net/banner/site_banner-takabo_edge2.png" alt="高機能ドット絵エディタ EDGE2" /></a></li>
        <li><a href="https://www.aseprite.org/" target="_blank" rel="noopener noreferrer">Aseprite</a></li>
        <li><a href="https://www.getpaint.net/" target="_blank" rel="noopener noreferrer">Paint.NET</a></li>
      </ul>
    </div>
  </Layout>
)

export default MaterialIndexPage
