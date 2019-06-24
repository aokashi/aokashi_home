<docs>
## ソフトウェアアイテム
ソフトウェアページの各ソフトウェアを表すコンポーネントです。

### `data` について
- `id`: ID
- `name`: 名前
- `description`: 説明
- `repository`: GitHub リポジトリへのURL
  - 絶対URLのため、 GitHub でなくても、 Bitbucket のリポジトリでも対応できます
- `keywords`: キーワード
- `references`: 外部ページへのURL (複数指定)
  - `name`: 名前
  - `url`: URL (絶対URL)
</docs>

<template>
  <div>
    <h2>{{data.name}}</h2>
    <p>{{data.description}}</p>
    <span v-for="(reference, referenceKey) in data.references" :key="referenceKey">
      <a :href=reference.url>{{reference.name}}</a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
