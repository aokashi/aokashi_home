<template>
  <div class="main">
    <div class="container mx-auto flex md:flex-row flex-wrap">
      <div class="content w-3/4">
        <slot/>
      </div>
      <aside class="menu w-1/4">
        <p>サイドバー</p>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  background-image: url('/images/background.png');
}

.content {
  order: 2;
  flex: 0 0 auto; }
  .content h1 {
    @apply text-xl text-navy font-bold bg-silver p-2; }
  .content h2 {
    @apply text-xl text-navy font-bold bg-silver border-l-8 border-navy my-4 p-2; }
  .content h3 {
    @apply text-lg text-navy font-bold border-b-4 border-navy my-4 p-2; }

.menu {
  @apply bg-blue-300; }

</style>
