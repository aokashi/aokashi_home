<template>
  <div class="layout">
    <MainHeader />
    <MainContent>
      <slot/>
    </MainContent>
    <MainFooter />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

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

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Noto Sans CJK JP","Meiryo",Roboto,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
