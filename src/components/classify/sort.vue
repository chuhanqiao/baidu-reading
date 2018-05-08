<template id="sort">
  <div class="sort">
    <ul class="clear-float">
      <li class="sort-li" v-for="data in datas">
        <p>{{data}}<img src="../../../static/img/arrow-bottom.png"/></p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:"sort",
    data:function(){
      return{
        datas:["热度","最新","销量","价格"]
      }
    }
  }
</script>
<style scoped>
  p{
    padding:0px;
    line-height: 30px;
    text-align: center;
  }
  .sort{
    width:925px;
    margin:0 auto;
    border:1px solid #ededed;
    height:30px;
    background: #f5f5f2;
  }
  .sort-li{
    display: inline-block;
    float: left;
    width:85px;
  }
  .sort-li p{
    width:100%;
    border-right:1px solid #ededed;
  }
  .sort-li img{
    width:11%;
    margin-left:1%;
  }
</style>

