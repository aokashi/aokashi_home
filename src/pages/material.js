import React from 'react'
import Layout from '../layouts/page-layout'

import MaterialNavItem from '../data/materials/navItem.json'
import PageHeader from '../components/PageHeader'
import WarningNote from '../components/Note/WarningNote'

const MaterialIndexPage = () => (
  <Layout>
    <PageHeader navItems={MaterialNavItem}>
      <h1>素材</h1>
    </PageHeader>
    <div className="content">
      <p>作品の制作に利用できる素材やライブラリ、アセットを公開しています。</p>
      <section className="section">
        <h2>ご利用について</h2>
        <p>当サイトでは、なるべく多くの方に利用してもらえるように、ここの素材やライブラリの利用制限はなるべく最小限に留めています。 <strong>「このサイト (Aokashi Home) から利用した」</strong> という表記を含めていただければ、ご自由にご利用できます。加工も自由です(また、画像を重ねるような加工が前提としたものもあります)。</p>
        <ul>
          <li>出典の表記についてはご自由に決めていただいて構いませんが、 <strong>なるべくネットの検索で辿れるような形で</strong> 表記をお願いします</li>
          <li>出典を表記しなくても特別に注意されることはありませんが、 <strong>出典は偽らないでください</strong> (利用者が当サイトの素材のことを自分が作った と言うことはできません)</li>
        </ul>
        <WarningNote>
          <p>画像素材を利用する場合は、対象の素材をそのままクリックすることでダウンロードできます。</p>
        </WarningNote>
      </section>
    </div>
  </Layout>
)

export default MaterialIndexPage
