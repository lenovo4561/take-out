<template>
  <div id="app">
   <router-view></router-view>
   <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  },
  mounted () {
  // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
    //    getAddress: function () {
    //      this.$store.dispatch('reAddress')
    //    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
