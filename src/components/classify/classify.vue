<template id="classify">
  <div class="classify-content">
    <div class="classify clear-float">
      <div class="c-left">
        <div class="all-classify"><p>全部图书分类</p></div>
        <ul>
          <li class="cl-li" v-for="(itemOne,index) in one" :key="index" @mouseover="showDiv(index)" @mouseout="hidDiv(index)">
            <p class="cl-out-p">{{itemOne.name}}<span>></span></p>
            <div class="cl-inline-div" v-if="itemOne.display">
              <a v-for="(item,index) in itemOne.content" :key="index">{{item.name}}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="c-right">
        <p class="ri-p">百度阅读><span>全部图书</span></p>
        <div class="sort">
          <ul class="clear-float">
              <li class="sort-li" v-for="(data,i) in datas"  @click="px(i)" :key="i">
                <p>{{data.name}}<img src="../../../static/img/arrow-bottom.png"/></p>
              </li>
          </ul>
        </div>
        <transition-group name="flip-list" tag="div" class="content clear-float">
            <div v-for="(item,i) in two" :key="item.id"  class="book" @mouseover="showDetail(i)" @mouseout="hideDetail(i)">
                <div class="book-div1" >
                  <img :src="item.imgUrl" alt="">
                  <p class="book-p1">{{item.title}}</p>
                  <p class="book-p2"><span>{{item.worker}}</span><span class="price">￥{{item.price}}</span></p>
                </div>
                <div class="book-div2" style="display: none">
                  <div class="border"><span></span></div>
                  <div class="bd-one">
                    <p class="bd-title">{{item.title}}</p>
                    <p class="bd-worker">{{item.worker}}</p>
                    <p class="bd-intro">{{item.intro}}</p>
                    <span class="price">￥{{item.price}}</span>
                    <ul class="bd-ul clear-float">
                      <li>
                        <p><img :src="item.imgUrl"/><span>加入购物车</span></p>
                      </li>
                      <li>
                        <p><img :src="item.imgUrl"/><span>加入我的图书</span></p>
                      </li>
                    </ul>
                  </div>
                  <div class="bd-two">
                    <p>使用阅读的设备</p>
                    <ul class="bd-ul-two clear-float">
                      <li>
                        <img :src="item.imgUrl" alt="">
                        <p>pc</p>
                      </li>
                      <li>
                        <img :src="item.imgUrl" alt="">
                        <p>iPhone</p>
                      </li>
                      <li>
                        <img :src="item.imgUrl" alt="">
                        <p>Android</p>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Classify",
    data:function () {
      return {
        datas:[
          {"name":"热度","title":"hot"},
          {"name":"最新","title":"new"},
          {"name":"销量","title":"number"},
          {"name":"价格","title":"price"}
        ],
        one:[],
        two:[],
        max:null,
        sort:[],
        timer:[],
        timer1:[]
      }
    },
    methods:{
//删除数组中的元素
      remove:function(arr, item) {
        var result=[];
        for(var i=0; i<arr.length; i++){
          if(arr[i]!=item){
            result.push(arr[i]);
          }
        }
        return result;
      },
//对数组进行排序
      sorted:function(arr1,name){
        var len = arr1.length;
        for(var i=0;i<len;i++){
          this.max = arr1[0];
          for(var j=0;j<arr1.length;j++){
           this.max = arr1[j][name]-this.max[name]>=0?arr1[j]:this.max;
          }
          this.sort.push(this.max);
          arr1 = this.remove(arr1,this.max);
        }
//        console.log("--------------------------");
//        console.log(this.sort);
      },
      showDiv:function (n) {
        for(var i = 0;i<this.one.length;i++){
          if(i==n){
            this.one[i].display=true;
          }
          else{
            this.one[i].display = false;
          }
        }
      },
      hidDiv:function (n) {
        this.one[n].display = false;
      },
      px:function(i){
        $(".sort-li").eq(i).addClass("black");
        $(".sort-li").eq(i).siblings().removeClass("black");
        this.sort = [];
        this.sorted(this.two,this.datas[i].title);
        this.two = this.sort;
      },
      showDetail:function (i) {
        if(this.timer1[i]!=null){
          clearTimeout(this.timer1[i]);
        }
        this.timer[i] = setTimeout(function () {
          $(".book-div2").eq(i).css("display","block");
        },500)
      },
      hideDetail:function(i){
        clearTimeout(this.timer[i]);
        this.timer1[i] = setTimeout(function(){
          $(".book-div2").eq(i).css("display","none");
        },200)
      }
    },
    mounted:function () {
      this.$http({
        url:"../../static/json/classify.json",
        method:"get"
      }).then(function(data){
        // console.log("classify success data");
        // console.log(data);
        this.one = data.body.one;
        this.two = data.body.two;
      },function(e){
        console.log("classify error data");
        console.log(e);
      })
    }
  }
</script>
<style scoped>
  .flip-list-move {
    transition: transform 1s;
  }
  p{
    margin:0;
    padding:14px 0;
  }
  .classify-content{
    background: #FDFDFB;
    overflow: hidden;
    border-bottom:1px solid #EAECEA;
  }
  .classify{
    width:60rem;
    margin:1.5rem auto;
  }
  .c-left,.c-right{
    float: left;
  }
  .c-left{
    width:12rem;
    box-sizing: border-box;
    height:100%;
    background: #F5F5F3;
    border:1px solid #ededed;
  }
  .c-right{
    width: 48rem;
    font-size: 14px;
  }
  /*侧边栏*/
  .all-classify{
    background: #34495E;
  }
  .all-classify p{
    text-align: center;
    color: #ffffff;
  }
  .cl-li{
    border-bottom: 1px solid #ededed;
    position: relative;
  }
  .cl-li:hover{
    background: #34495E;
  }
  .cl-li:hover p{
    color: #ffffff;
  }
  .cl-out-p{
    font-size: 14px;
    vertical-align: middle;
    padding-left: 0.75rem;
  }
  .cl-out-p span{
    display: inline-block;
    float: right;
    padding-right: 10px;
  }
  .cl-inline-div{
    width:31.4rem;
    height:8.4rem;
    border:1px solid black;
    position: absolute;
    z-index: 1;
    left: 11.85rem;
    top:0px;
    background: #ffffff;
  }
  .cl-inline-div a{
    display: inline-block;
    width:25%;
    text-align: center;
    line-height: 1.5rem;
    color: #000000;
    font-size:14px;
  }
  /*右边内容区*/
  .sort{
    width:46.25rem;
    margin:0 auto;
    height:1.5rem;
    border:1px solid #ededed;
    background: #f5f5f2;
    color: #353535;
  }
  .sort-li{
    display: inline-block;
    float: left;
    width:85px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .sort-li.black{
    color: #000000;
    font-weight: 600;
  }
  .sort-li p{
    padding: 0px;
    width:4.25rem;
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border-right:1px solid #ededed;
  }
  .sort-li img{
    width:8px;
    margin-left:5px;
  }
  .ri-p{
    padding:0;
    width:46.25rem;
    margin:0 auto 18px auto;
  }
  /*content*/
  .content{
    width:46.25rem;
    margin: auto;
  }
  .content>div{
    float: left;
    width: 20%;
  }
  .book{
    width: 7rem;
    height: 12.65rem;
    padding: 8px;
    margin: 1.5rem auto auto auto;
    position: relative;
  }
  .book:hover{
    background: #F0F1EC;
  }
  .book-div1 p,.bd-one p,.bd-one span,.bd-two p,.bd-two span{
    font-size: 13px;
  }
  .book>.book-div1{
    width:6.6rem;
    margin:auto;
  }
  .book-div1 img{
    display: inline-block;
    width:6.6rem;
    height:8.8rem;
  }
  .book-p1{
    width:6.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .book-p2 span{
    display: inline-block;
    width: 50%;
  }
  .book-p2 span:nth-child(2){
    text-align: right;
  }
  .price{
    color: #FB605E;
  }
  .book-div2{
    width: 320px;
    height: 270px;
    border: 1px solid black;
    background: #ffffff;
    position: absolute;
    top: 0px;
    left: 8.4rem;
    z-index: 100;
  }
  .book-div2 p{
    padding:0;
    margin:7px auto;
  }
  /*生成三角形*/
  .border{
    width:0px;
    height:0px;
    border:10px solid;
    border-color:transparent grey  transparent transparent;
    position: absolute;
    top:125px;
    left:-20px;
  }
  .border span{
    width:0px;
    height:0px;
    border:8px solid;
    border-color:transparent #ffffff transparent transparent;
    position: absolute;
    top: -8px;
    left: -6px;
  }
  .bd-one{
    margin:20px;
  }
  .book-div2 ul{
    padding:0;
  }
  .bd-ul li{
    display: inline-block;
    float: left;
    width:50%;
  }
  .bd-ul li img{
    display: inline-block;
    height:26px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .bd-ul li p{
    width:75%;
    margin:auto;
    border: 1px solid black;
  }
  .bd-ul span{
    display: inline-block;
    vertical-align: middle;
  }
  .bd-two{
    background: #F5F5F3;
    height:85px;
    margin-top:45px;
    overflow: hidden;
  }
  .bd-two>p{
    margin:8px auto 8px 20px;
    font-weight: 600;
  }
  .bd-ul-two{
    margin: 0;
  }
  .bd-ul-two li{
    display: inline-block;
    width: 20%;
    float: left;
    text-align: center;
  }
  .bd-ul-two img{
    height:20px;
  }
  .clear-float:after{
    content: '';
    clear: both;
    display: block;
  }
</style>
