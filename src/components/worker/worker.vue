<template id="client">
  <div class="client">
    <div class="c-recommend">
      <div class="cr-item">
        <div class="item1">
          <div class="media">
            <img src="../../../static/img/client/worker-logo.jpg" alt="">
          </div>
         <div class="content">
           <p></p>
           <p></p>
         </div>
        </div>
        <div class="item2"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Client",
    data:function () {
      return {
        datasOne:[

        ]
      }
    }
  }
</script>
<style scoped>
.cr-item .item1{
  width:260px;
  height:60px;
}
.cr-item .item1 img{
  width:60px;
  height:60px;
}
</style>
