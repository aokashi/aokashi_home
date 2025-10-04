import React from "react"
import Layout from "../layouts/page-layout"
import { Heading, Image } from "@chakra-ui/react"

import Seo from "../components/seo"
import MaterialNavItem from "../data/materials/navItem.json"
import PageHeader from "../components/PageHeader"
import WarningNote from "../components/Note/WarningNote"
import PageHeaderNav from "../components/PageHeaderNav"
import Link from "../components/Link"

const MaterialIndexPage = () => (
  <Layout headerContent={
    <PageHeader bottomContent={<PageHeaderNav navItems={MaterialNavItem} />}>
      <Heading as="h1" size="lg">素材</Heading>
    </PageHeader>
  }>
    <div className="ah-article">
      <p>作品の制作に利用できる素材やライブラリ、アセットを公開しています。</p>
      <h2>ご利用について</h2>
      <p>当サイトでは、なるべく多くの方に利用してもらえるように、ここの素材やライブラリの利用制限はなるべく最小限に留めています。 <strong>「このサイト (Aokashi Home) から利用した」</strong> という表記を含めていただければ、ご自由にご利用できます。加工も自由です(また、画像を重ねるような加工が前提としたものもあります)。</p>
      <p>出典を表記しなくても特別に注意されることはありませんが、 <strong>出典は偽らないでください</strong> (利用者が当サイトの素材のことを自分が作った と言うことはできません)</p>
      <h3>こういうときはOK？</h3>
      <ul>
        <li>出典表記は「Aokashiさん」としてもいいですか？
          <ul>
            <li>出展表記はご自由に決めていただいて構いませんが、 <strong>なるべくネットの検索で辿れるような形で</strong> 表記をお願いします</li>
          </ul>
        </li>
        <li>商用利用したい
          <ul>
            <li>OKです！</li>
            <li>ただし素材単体での商用利用 (例えば当サイトの素材だけを印刷して売る) はしないでください。 人のもの、売って儲けたら盗作！</li>
          </ul>
        </li>
        <li>WWA素材をWWA以外で利用したい
          <ul>
            <li>もちろんOKです！</li>
            <li>規格が違う場合もあるので、各自で修正してください</li>
          </ul>
        </li>
        <li>素材を含めたゲームをダウンロードできるように配布したい
          <ul>
            <li>出展の偽りを防ぐため、一度ご連絡して許可を得てください。</li>
            <li>配布の仕方によっては許可がおりない場合がありますが、大体はOKです。</li>
            <li>なお、ゲームに含める場合は、素材を直接編集に使用しないように明記してください。</li>
          </ul>
        </li>
        <li>改変した素材を配布したい
          <ul>
            <li>これも一度連絡して許可を得てください。</li>
            <li>改変の仕方次第では許可がおりない場合があります。</li>
          </ul>
        </li>
        <li>そのほか、ご不明点があればお気軽にご連絡ください。</li>
      </ul>
      <WarningNote>
        <p>画像素材を利用する場合は、対象の素材をそのままクリックすることでダウンロードできます。</p>
      </WarningNote>
      <h2>使用ツール</h2>
      <ul>
        <li>
          <Link href="http://takabosoft.com/edge2">
            <Image src="https://contents.aokashi.net/banner/site_banner-takabo_edge2.png" alt="高機能ドット絵エディタ EDGE2" sx={{ display: 'inline' }} />
          </Link>
        </li>
        <li><Link href="https://www.aseprite.org/">Aseprite</Link></li>
        <li><Link href="https://www.getpaint.net/">Paint.NET</Link></li>
        <li><Link href="https://hippogamesunity.github.io/PixelStudioHub/">Pixel Studio PRO for pixel art</Link>
          <ul>
            <li><Link href="https://apps.apple.com/jp/app/pixel-studio-pro-for-pixel-art/id1476932307">App Store</Link></li>
            <li><Link href="https://play.google.com/store/apps/details?id=com.pixelstudio.pro">Google Play</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="素材" description="Aokashi Homeの素材はWWAや建物のアイコンなどを取り扱っています。総数は200件以上！" />
)

export default MaterialIndexPage
