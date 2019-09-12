<template>
  <div class="main__content content">
    <div class="container mx-auto flex md:flex-row flex-wrap">
      <div class="content__content w-3/4">
        <slot/>
      </div>
      <aside class="content__sidebar sidebar w-1/4">
        <!-- TODO サイドバーの使いみちを考える -->
      </aside>
    </div>
  </div>
</template>

<style lang="sass">
.main__content
  background-image: url('/images/background.png')

  .content__content
    order: 2
    flex: 0 0 auto
    a
      @apply text-blue-600
      &:hover
        @apply underline
    h1
      @apply text-xl text-navy font-bold bg-silver p-2
    h2
      @apply text-xl text-navy font-bold bg-silver border-l-8 border-navy my-4 p-2
    h3
      @apply text-lg text-navy font-bold border-b-4 border-navy my-4 p-2
    ol
      @apply list-decimal list-outside my-4 pl-8
    li
      @apply my-2
    p
      @apply my-4
    ul
      @apply list-disc list-outside my-4 pl-8

  .content__sidebar
    @apply bg-blue-300
</style>
