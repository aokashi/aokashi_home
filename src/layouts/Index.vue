<template>
  <div class="top">
    <header class="top-header header">
      <div class="container mx-auto">
        <h1 class="header__title title">
          <g-image class="title__img" alt="Aokashi Home" src="~/assets/images/logo.png" />
        </h1>
      </div>
    </header>
    <nav class="top-menu menu">
      <div class="container mx-auto">
        <g-link class="menu__item" to="/wwa" name="WWA">WWA</g-link>
        <g-link class="menu__item" to="/software" name="Software">Software</g-link>
        <g-link class="menu__item" to="/material" name="Material">Material</g-link>
        <g-link class="menu__item" to="/portfolio" name="Portfolio">Portfolio</g-link>
      </div>
    </nav>
    <div class="top-content cotnent">
      <div class="container mx-auto">
        <slot/>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue';
import MainFooter from '~/components/MainFooter.vue';

export default {
  components: {
    Menu,
    MainFooter
  }
}
</script>

<style lang="sass">
  body
    background: #808080 url('~@/assets/images/background-home.png');

  .top-header,
  .top-menu,
  .top-content
    .container
      @apply p-2
      background-color: rgba(255, 255, 255, .4)

  .top-header
    .header__title
      @apply p-2
      .title__img
        @apply mx-auto
  
  .top-menu
    .container
      @apply flex

    .menu__item
      @apply w-1/4 bg-white border-2 rounded text-center m-3
      &:hover
        @apply border-gray-700

</style>
