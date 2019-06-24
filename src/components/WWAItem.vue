<docs>
## WWA アイテム
WWA作品を表すコンポーネントです。

### `number` について
WWA作品を一意に識別するための番号です。

3桁構成にする必要があります。

### `data` について
- `id`: WWA作品のIDで、ファイル名に利用されます
- `name`: 名前
- `description`: 説明
- `games`(optional): ゲーム一覧
- `supportWWAWing`: WWAWing に対応しているか
- `hasMainPage`: 作品用に別途ページを持っているか
  - 持っている場合は、URLの末尾に `.html` が付かなくなります

### `games` について
1章や2章, ... のように、複数章を持つ関係で複数のWWAゲームを持たなければならない場合は `games` を利用します。

`games` は、以下の項目を表した配列で指定します。

- `id`: WWAゲームのIDで、こちらもファイル名に利用されます
- `name`: 名前
</docs>

<template>
  <div>
    <h2 v-for="(game, gameNumber) in games" :key="game.id">
      [{{getNumber(number, gameNumber)}}]
      <a :href="getUrl(game.id)">{{data.name}} {{game.name}}</a>
    </h2>
    <p>{{data.description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    games() {
      if (!this.data.games) {
        return [{
          id: this.data.id,
          name: ''
        }];
      }
      return this.data.games;
    }
  },
  methods: {
    getNumber(mainNumber, subNumber) {
      return subNumber ? `${mainNumber}-${subNumber}` : mainNumber;
    },
    getUrl(id) {
      return this.data.hasMainPage ? `/wwa/${id}` : `/wwa/${id}.html`;
    }
  }
}
</script>

<style>

</style>
