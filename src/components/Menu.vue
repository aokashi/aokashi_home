<docs>
# Menu コンポーネント
メニューです。

## プロパティについて
`data` プロパティが必要です。

### data プロパティについて
下記のオブジェクトの配列になります。

```javascript
{
  "name": "名前 (テキストに表示されます)",
  "link": "リンク先のアドレスまたはURL"
}
```
</docs>

<template>
  <nav class="menu">
    <template v-for="(menuItem, menuIndex) in data">
      <g-link v-if="isInternalLink(menuItem.link)" :key="menuIndex" :to="menuItem.link" class="menu__item" active-class="menu__item--active">{{menuItem.name}}</g-link>
      <a v-else :key="menuIndex" :href="menuItem.link" class="menu__item">{{menuItem.name}}</a>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    /**
     * リンク先が内部リンクか確認します
     * @param {String} link
     * @returns {Boolean}
     */
    isInternalLink(link) {
      return link.match('.*\/\/') === null;
    }
  }
}
</script>
