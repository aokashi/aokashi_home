<template>
  <Layout>
    <template v-slot:header>
      <h1>WWA</h1>
    </template>
    <p>WWA作品を扱っています。</p>
    <BoxList>
      <WWAItem v-for="(wwa, wwaNumber) in WWAData" :key="wwaNumber" :number="wwaNumber" :data="wwa" />
    </BoxList>
  </Layout>
</template>

<script>
import BoxList from '~/components/BoxList.vue';
import WWAItem from '~/components/WWAItem.vue';
import WWAData from '~/data/wwa.json';

export default {
  components: {
    BoxList,
    WWAItem
  },
  data() {
    return {
      WWAData
    }
  }
}
</script>
