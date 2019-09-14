<docs>
# Box
BoxList コンポーネントの各項目で利用するコンポーネントです。
BoxList のスロットの中に入れる必要があります。

## プロパティについて
- `width` ... 横幅 (必須)
  - コンポーネントの横幅です
  - Tailwind CSS の横幅で指定します
  - 横幅の指定については https://tailwindcss.com/docs/width をご参照ください
</docs>

<template>
  <div :class="classes">
    <header class="box__header header">
      <h2 class="header__title"><slot name="title"></slot></h2>
    </header>
    <slot/>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return `box w-${this.width}`;
    }
  }
}
</script>

<style lang="sass">
.box
  @apply p-2
  .box__header
    .header__title
      @apply text-base bg-transparent border-0
</style>
