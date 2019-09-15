<template>
  <Layout>
    <template v-slot:header>
      <h1>Aokashi Home について</h1>
    </template>
    <p>Aokashi Home は Aokashi が運営するWebサイトです。</p>
    <section>
      <h2>コンテンツの転載について</h2>
      <p>当サイトのコンテンツの転載は、<strong>「引用」</strong>の表記に限り、転載が可能です。</p>
      <blockquote>
        <p>引用は、HTMLでは <code>blockquote</code> 要素か <code>q</code> 要素で、 Markdown では先頭行に <code>&gt;</code> を入れた形で表記します。</p>
        <p>難しい場合は <strong>引用だと分かる形で</strong> (例えば先頭行に <code>&gt;</code> を付ける) 表記してください。</p>
      </blockquote>
      <p>画像についても、引用の範囲内であれば転載に利用できます。</p>
    </section>
    <section>
      <h2>お問い合わせ</h2>
      <p>以下の手段をご利用ください。</p>
      <ul>
        <li><strong>メール</strong>: Aokashi.Towa(at)Outlook.jp</li>
        <li><strong>Twitter</strong>: <a href="https://twitter.com/aokashi">@aokashi</a></li>
      </ul>
      <WarnNote>
        <p>脆弱性の悪用防止の為、脆弱性の報告目的でのご連絡は、メールをご利用ください。</p>
      </WarnNote>
    </section>
  </Layout>
</template>

<script>
import WarnNote from '~/components/WarnNote.vue';

export default {
  metaInfo: {
    title: 'Aokashi Home について'
  },
  components: {
    WarnNote
  }
}
</script>
