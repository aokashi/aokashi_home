<docs>
# WWA アイテム
WWA作品を表すコンポーネントです。

## プロパティについて

### `number`
WWA作品を一意に識別するための番号です。

3桁構成にする必要があります。

### `data`
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
  <Box :width="width">
    <template v-slot:title>
      {{data.name}}
    </template>
    <div class="flex">
      <div v-for="game in games" :key="game.id" class="w-full">
        <a :href="getUrl(game.id)">{{game.name}}</a>
      </div>
    </div>
    <p>{{data.description}}</p>
    <template v-slot:footer></template>
  </Box>
</template>

<script>
import Box from '~/components/Box.vue';

export default {
  components: {
    Box
  },
  props: {
    number: {
      type: String,
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
          name: 'プレイ'
        }];
      }
      return this.data.games;
    },
    width() {
      let length = 1;
      if (this.data.games) {
        length = Object.keys(this.data.games).length;
      }
      switch (length) {
        case 1:
          return '1/3';
        case 2:
          return '2/3';
        default:
          return 'full';
      }
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
