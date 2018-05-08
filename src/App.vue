<template id="app">
  <div class="app">
    <my-header></my-header>
    <my-menu></my-menu>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import heading from "./components/header.vue"
  import menuing from "./components/menu.vue"
  import footering from "./components/footer.vue"
export default {
  name: 'app',
  data:function () {
    return {
    }
  },
  components:{
    "my-header":heading,
    "my-menu":menuing,
    "my-footer":footering
  }
}
</script>

<style>
.app{
  width:100%;
}
</style>
