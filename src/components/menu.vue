<template>
  <div class="menu">
    <div class=" main clear-float">
      <ul class="clear-float">
        <li v-for="(dataOne,index) in datasOne" :key="index"  :class="{bgBottom:dataOne.show}" @click="ifShow(index)">
          <router-link :to="dataOne.path"><a>{{dataOne.name}}</a></router-link>
        </li>
      </ul>
      <div class="myShelf">
        <router-link :to="dataTwo"><i class="icon-书架"></i><span>我的书架</span></router-link>
      </div>
    </div>
    <div class="null"></div>
    {{path}}
  </div>

</template>
<script>
  export default {
    name: "menuing",
    data: function () {
      return {
        datasOne: [
          {name: "首页", path: "/home", show: true},
          {name: "分类", path: "/classify", show: false},
          {name: "榜单", path: "/billboard", show: false},
          {name: "独家作品", path: "/worker", show: false},
          {name: "机构专区", path: "/institutional", show: false},
          {name: "客户端", path: "/client", show: false}
        ],
        dataTwo: "/shelf",
        path:""
      }
    },
    methods: {
      ifShow: function (a) {
        for (var i = 0; i < this.datasOne.length; i++) {
          this.datasOne[i].show = false;
        }
        this.datasOne[a].show = true;
      },
      aa:function (str) {
        var n;
        for(var i =0;i<this.datasOne.length;i++){
          if(str==this.datasOne[i].path){
            n=i;
            this.ifShow(n);
            return;
          }
        }
      }
    },
    watch:{
      '$route' (to, from) {
        this.aa(to.path);
      }
    },
    mounted:function(){
      var path = this.$route.path;
      this.aa(path);
    }
  }
</script>
<style scoped>
  .main{
    width: 54.5rem;
    margin:0 auto;
  }
  .menu ul{
    list-style:none;
    margin:0;
    float: left;
  }
   a{
    color:black;
     text-decoration: none;
  }
  .menu ul li{
    float: left;
    line-height: 2em;
    padding:0px 1.5rem;
  }
 .bgBottom{
    border-bottom: 4px solid #58BD5A;
  }
 .bgBottom a{
   color: #58BD5A;
 }
  .menu ul li:hover{
    border-bottom: 4px solid #58BD5A;
  }
  .menu ul li:hover a{
    color: #58BD5A;
  }
  .menu ul li a{
    display: inline-block;
    font-size:1em;
    cursor: pointer;
  }
  .null{
    width: 60rem;
    margin:0 auto;
    border-bottom:2px solid #58BD5A;
  }
  .myShelf{
    float: right;
    font-size:14px;
    line-height:2em;
    cursor: pointer;
  }
  .myShelf:hover span{
    color:#58BD5A;
  }
  .myShelf span{
    padding-left:5px;
  }

</style>
