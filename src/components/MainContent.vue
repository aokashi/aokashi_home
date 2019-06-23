<template>
  <div class="main">
    <div class="content">
      <slot/>
    </div>
    <aside class="menu">
      <p>サイドバー</p>
    </aside>
  </div>
</template>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: row
  background-image: url('/images/background.png')
  +content-width()

.content
  order: 2
  flex: 0 0 auto

.menu
  order: 1
  flex: 0 0 10rem

</style>
