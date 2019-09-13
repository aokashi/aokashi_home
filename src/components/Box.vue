<docs>
# Box
BoxList コンポーネントの各項目で利用するコンポーネントです。
BoxList のスロットの中に入れる必要があります。

## プロパティについて
- `width` ... 横幅 (必須)
  - コンポーネントの横幅です
  - Tailwind CSS の横幅で指定します
  - 横幅の指定については https://tailwindcss.com/docs/width をご参照ください
- `title` ... タイトルテキスト
  - 指定すると、上部にタイトルが表示されます
- `class` ... クラス
  - 要素に追加でクラスが欲しい場合はこのプロパティを使用します
</docs>

<template>
  <div :class="classes">
    <h2 v-if="title">{{title}}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    class: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return `box w-${this.width} ${this.class}`;
    }
  }
}
</script>
