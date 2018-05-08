<template>
  <div id="header">
    <div class="g-hd-one">
      <ul class="g-hd-ul-one">
        <li><a href="">消息</a></li>
        <li><a href="">意见反馈</a></li>
        <li><a href="">购物车</a></li>
        <li class="g-hd-dropdown">
          <a href="">楚汉乔<img class="arrow-down" src="../../static/img/arrow-down.png" /></a>
          <ul class="g-hd-ul-two">
            <li v-for="dataOne in datasOne" :key="dataOne.name"><a href="">{{dataOne.name}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="g-hd-two">
      <img src="../../static/img/read_logo.png" alt="">
      <input class="g-input-txt" type="text" placeholder="在数十万册图书中搜索">
      <input class="g-input-btn" type="button" value="搜索图书">
    </div>
    <div class="g-hd-three">
      <p><a v-for="dataTwo in datasTwo" :key="dataTwo.name" href="">{{dataTwo.name}}</a></p>
    </div>
  </div>
</template>
<script>
  export default {
    name:"headeing",
    data:function () {
      return {
        datasOne:[
          {name:"我的订单"},
          {name:"我的兑换码"},
          {name:"我的代金券"},
          {name:"账号设置"},
          {name:"退出"}
        ],
        datasTwo:[
          {name:"白先勇细说红楼梦"},
          {name:"楚乔传"},
          {name:"我和我的猫都想你了"},
          {name:"十年一品温如言"},
          {name:"白鹿原"},
          {name:"悟空传"}
        ]
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  #header{
    width: 54.5rem;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    font-size:0.7em;
    color:#3b3939;
  }
  ul{
    list-style: none;
    margin:0em;
  }
  .g-hd-one{
    height:1.5rem;
  }
  .g-hd-ul-one>li{
    float: right;
    padding:0.3em 0.1em;
  }
  .g-hd-ul-one>li:hover>a{
    color:grey;
  }
  .g-hd-ul-one>li>a{
    display: inline-block;
    padding:0em 1em;
    border-right: 0.01em solid grey;
   margin-bottom:10px;
  }
  .g-hd-ul-one>li:nth-child(1)>a{
    border-right:0em;
  }
  .g-hd-dropdown{
    position:relative;
  }
  .g-hd-dropdown:hover>ul{
    display: block;
  }
  .arrow-down{
    width:8px;
  }
  .g-hd-dropdown:hover a img{
    display: inline-block;
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg);
  }
  .g-hd-ul-two{
    padding-left: 0em;
    position:absolute;
    right:0em;
    border-radius: 0.3em;
    border:0.01em solid lightgrey;
    display: none;
    background: white;
  }
  .g-hd-ul-two li{
    width:5em;
    padding:0.6em 1.5em;
    border-bottom: 0.01em solid lavender;
  }
  .g-hd-ul-two li:hover{
    background:#f5f5f5;
  }
  .g-hd-two{
    height: 2.5rem;
  }
  .g-hd-two>img{
    display: inline-block;
    float: left;
    margin-right: 0.5rem;
  }
  input{
    outline: none;
  }
  .g-input-txt{
    width: 17.5rem;
    height: 1.85rem;
    font-size: 13px;
    padding:0 0 0 0.5rem;
    border: 1px solid #b8b8b8;
    color: #000;
    background: #fff;
    outline: 0;
    float: left;
    margin-top:10px;
  }
  .g-input-btn{
    box-sizing: content-box;
    padding:0;
    float: left;
    margin-left: -1px;
    width: 5rem;
    height: 1.85rem;
    line-height: 1.85rem;
    text-align: center;
    color: #333;
    border: 1px solid #ccc;
    font-size: 14px;
    background: linear-gradient(to bottom,#fcfcfc 0,#f3f3f3 100%);
    margin-top:10px;
  }
  .g-hd-three p{
    margin-left:8rem;
    color:#526652;
  }
  .g-hd-three a{
    padding-right:0.5rem;
  }
  .g-hd-three a:hover{
    color:green;
  }
</style>
