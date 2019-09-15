<template>
  <div class="main-content content">
    <div class="container mx-auto lg:flex lg:flex-nowrap">
      <aside class="content__sidebar sidebar lg:w-1/6">
      </aside>
      <article class="content__article lg:w-5/6 lg:ml-4">
        <slot/>
      </article>
    </div>
  </div>
</template>

<style lang="sass">
.main-content
  background-image: url('/images/background.png')

  .content__article
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
