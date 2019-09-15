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
  <Box :width="width" class="wwa-item">
    <template v-slot:title>
      {{data.name}}
    </template>
    <div class="md:flex">
      <div v-for="game in games" :key="game.id" class="wwa-item__game-item game-item">
        <a class="game-item__link" :href="getUrl(game.id)">
          <img class="game-item__img" :src="getImagePath(game.id)" :alt="game.name">
          {{game.name}}
        </a>
      </div>
    </div>
    <div class="wwa-item__description">
      <p>{{data.description}}</p>
    </div>
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
          name: this.data.hasMainPage ? 'メインページ' : 'プレイ'
        }];
      }
      return this.data.games;
    },
    width() {
      let length = 1;
      if (this.data.games) {
        length = Object.keys(this.data.games).length;
      }
      switch (length) { // TODO: Box の width プロパティに Tailwind CSS のクラス名を直で記述しないようにしておきたい
        case 1:
          return 'full md:w-1/2 lg:w-1/3 xl:w-1/4';
        case 2:
          return 'full lg:w-2/3 xl:w-2/4';
        default:
          return 'full xl:w-3/4';
      }
    }
  },
  methods: {
    getNumber(mainNumber, subNumber) {
      return subNumber ? `${mainNumber}-${subNumber}` : mainNumber;
    },
    getUrl(id) {
      return this.data.hasMainPage ? `/wwa/${id}` : `/wwa/${id}.html`;
    },
    getImagePath(id) {
      return `/images/wwa/${id}.gif`;
    }
  }
}
</script>

<style lang="sass">
.wwa-item

  .wwa-item__game-item
    @apply w-full rounded bg-gray-400 m-1 p-1 text-center font-bold

    .game-item__img
      @apply mx-auto

  .wwa-item__description
    @apply text-sm p-2
</style>
