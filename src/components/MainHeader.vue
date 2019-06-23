<template>
  <header class="header">
    <div class="title">
      <g-link to="/" title="Aokashi Home">
        <g-image src="~/assets/images/logo-mini.png" class="logo" alt="Aokashi Home" />
      </g-link>
    </div>
    <div class="menu">
      <div class="menu__item">
        WWA
      </div>
      <div class="menu__item">
        Software
      </div>
      <div class="menu__item">
        Material
      </div>
      <div class="menu__item">
        Portfolio
      </div>
      <div class="menu__item">
        AboutMe
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header
  background-color: #c0c0c0
  border-bottom: 2px solid #000080
  +content-width()

.menu
  display: flex
  flex-direction: row
  justify-content: center

.menu__item
  flex: 0 0 6rem
  text-align: center
</style>
