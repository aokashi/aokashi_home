<template>
  <div>
    <MainHeader />
    <MainContent>
      <slot/>
    </MainContent>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import MainContent from '../components/MainContent.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainContent,
    MainFooter
  }
}
</script>

<style lang="sass">
body
  background: #404040 none;
</style>
