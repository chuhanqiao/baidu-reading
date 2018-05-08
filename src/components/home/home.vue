<template id="home">
  <div class="home">
    <div class="home-one clear-float">
      <div class="one1">
        <img src="../../../static/img/home/head.png" alt="">
      </div>
      <div class="one2">
        <img src="../../../static/img/home/swiper2.jpg" alt="">
      </div>
    </div><!--home-one--over-->
    <div class="home-two clear-float">
      <div>
        <h4>分类</h4>
      </div>
      <transition name="slide">
        <div :style={height:height}>
            <ul>
              <li v-for="two in twos"><router-link :to="two.path">{{two.title}}</router-link></li>
            </ul>
        </div>
      </transition>
      <div @click="more">
        <span>更多<img class="arrow-down" src="../../../static/img/arrow-down.png"/></span>
      </div>
    </div><!--home-two--over-->
    <div class="home-three">
      <img :src="three.url" alt="" v-for="three in threes">
    </div><!--home-three--over-->
    <div class="home-four">
      <div class="home-four-content clear-float">
        <div class="item" v-for="four in fours">
          <div class="content">
            <img :src="four.imgUrl" alt="">
            <div class="bg-ab"></div>
            <div class="bg">
              <p class="bg-p">{{four.title}}</p>
              <p class="bg-p">今何在</p>
              <p class="bg-p">xingxing</p>
              <input class="bg-p" type="button" value="去看看" :key="4">
            </div>
          </div>
          <p class="item-p-1">{{four.title}}</p>
          <p class="item-p-2">{{four.price}}</p>
        </div>
      </div>
    </div><!--home-four--over-->
    <div class="home-five">
      <div class="five-content clear-float">
        <p>出版社</p>
        <div class="five-1">
          <ul class="five-ul clear-float">
            <li v-for="(fiveOne,index) in fiveOne" @mouseover="show(index)"><img :src="fiveOne.imgUrl" alt=""></li>
          </ul>
        </div>
        <div class="five-2">
          <div class="five-2-item" v-for="items in fiveTwo" v-if="items.show">
            <p>上海读客</p>
            <ul class="clear-float">
              <li v-for="item in items.content"><img :src="item.imgUrl" alt=""><p>何以笙箫默</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div><!--home-five---over-->
  </div>
</template>
<script>
  export default {
    name:"home",
    data:function () {
      return {
        twos:[],
        height:"47px",
        threes:[],
        fours:[],
        fiveOne:[],
        fiveTwo:[],
        timer:[],
        cNumber:0
      }
    },
    methods:{
      more:function () {
        this.cNumber++;
        if(this.cNumber%2==0){
          $(".arrow-down").removeClass("xz")
        }
        else{
          $(".arrow-down").addClass("xz")
        }
        if(this.height=="47px"){
          this.height = "94px";
        }
        else{
          this.height = "47px";
        }
      },
      show:function (index) {
//        for(var i=0;i<this.fiveTwo.length;i++){
//          if(i==index){
//            this.fiveTwo[i].show=true;
//          }
//          else{
//            this.fiveTwo[i].show=false;
//          }
//        }

var _this = this;
        if(this.timer[index]!=null){
          clearTimeout(this.timer[index]);
        }
        this.timer[index] = setTimeout(function () {
          for(var i=0;i<_this.fiveTwo.length;i++){
            if(i==index){
              _this.fiveTwo[i].show=true;
            }
            else{
              _this.fiveTwo[i].show=false;
            }
          }
        },500)


      }
    },
    mounted: function () {
      this.$http({
        url: "../../static/json/home.json",
        method: "get",
        emulateJSON: true
      }).then(function (data) {
        console.log("home success data");
      // console.log(data);
        this.twos = data.body.two;
        this.threes = data.body.three;
        this.fours=data.body.four;
        this.fiveOne = data.body.five.one;
        this.fiveTwo = data.body.five.two;
      }, function (e) {
        console.log("error data");
        //console.log(e);
      });
    }
  }
</script>
<style scoped>
  .home-one,.home-two,.home-three,.home-four-content{
    width:54.5rem;
    margin:0 auto;
  }
  .one1,.one2{
    float: left;
  }
  .one1>img,.one2>img{
    width:100%;
  }
  .one1{
    width:18.5rem;
  }
  .one2{
    width:36rem;
  }
  .home-one{
    margin:1rem auto;
  }
  .home-two div{
    float: left;
  }
.home-two div:nth-child(1) h4{
  margin-top: 15px;
}
  .home-two div:nth-child(2){
    text-align: center;
    transition:height 0.5s;
    overflow: hidden;
    padding-bottom: 12px;
    border-bottom: 1px solid #F2F2EB;
  }
  .home-two div:nth-child(2) ul{
    width:47.5rem;
    margin:0px;
  }
  .home-two div:nth-child(2) ul li{
    list-style: none;
    display: inline-block;
    margin: 15px 0.5rem 0 0;
    height: 32px;
    line-height: 30px;
    font-size: 15px;
    border-radius: 7px;
  }
.home-two div:nth-child(2) ul li:hover{
  background: #58BD5A;
  cursor: pointer;
}
.home-two div:nth-child(2) ul li:hover a{
  color: white;
}
  .home-two div:nth-child(2) li a{
    display: block;
    border-radius: 6px;
    color: #555;
    text-decoration: none;
    padding: 0 0.75rem;
    border: 1px solid #d3d3d3;
  }
.home-two div:nth-child(3) span{
  display: inline-block;
  margin-top: 15px;
  cursor: pointer;
}
  .home-two div:nth-child(3) span img{
    width:0.6rem;
  }
  .home-three img{
    display: inline-block;
    width: 31%;
    border-radius: 10px;
    margin: 1.5rem 1%;
    cursor: pointer;
  }
  .xz{
    display: inline-block;
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg);
  }
.home-four{
  background: #F6F5EE;
}
/*动态*/
.item{
  width: 7.9rem;
  float: left;
  margin:0 0.55rem;
}
.item>p{
  text-align: center;
}
.item-p-1{
  margin-top: 1rem;
}
.item-p-2{
  color:#D0794D;
}
.item .content img{
  width: 6.25rem;
  height: 8.25rem;
  border-radius:5px;
  display: block;
  margin: 0.8rem auto;
  box-shadow: 3px 3px #d3d3d3;
}
.content{
  width: 7.9rem;
  height: 9.85rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.bg-ab{
  width: 7.9rem;
  height: 9.9rem;
  position: absolute;
  transition:0.2s top;
  background:white;
  opacity: 0.8;
}
.bg{
  width: 7.9rem;
  height: 9.9rem;
  position: absolute;
}
.content:hover .bg-p{
  top: -8.25rem;
}
.content:hover .bg-ab{
  top:0px;
}
.bg input{
  display: block;
  background: white;
  color:#58BD5A;
  width:3.5rem;
  height: 1.5rem;
  border-radius: 5px;
  border:1px solid #58BD5A;
  outline:none;
  cursor: pointer;
  margin: 1rem auto;
}
.bg p{
  width: 5rem;
  margin:0px auto;
  text-align: center;
  line-height: 23px;
  font-size:15px;
  color:#525252;
}
.bg-p{
  position:relative;
  top:0px;
  transition:0.5s top;
  transition-timing-function:cubic-bezier(.17,.67,.35,.98) ;
}
.bg-p:nth-child(1){
  transition-delay: 0.1s;
}
.bg-p:nth-child(2){
  transition-delay: 0.15s;
}
.bg-p:nth-child(3){
  transition-delay: 0.2s;
}
.bg-p:nth-child(4){
  transition-delay: 0.25s;
}
  /*home-five*/
  .home-five{
    background: #F3F3F1;
    overflow: hidden;
  }
  .five-content{
    width: 48.25rem;
    margin:4em auto;
    box-sizing: border-box;
  }
  .five-content>div{
    float: left;
  }
  .five-content>p{
    text-align: center;
    font-size: 25px;
  }
  .five-1{
    background: #ffffff;
  }
  .five-ul{
    list-style: none;
    width: 22.95rem;
  }
  .five-ul li{
    float: left;
    width: 7.65rem;
    height:4.2rem;
    text-align: center;
    vertical-align: middle;
    border:1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .five-ul li:hover {
    border:1px solid #58BB5A;
  }
  .five-ul li img{
    width: 5.5rem;
    height:2rem;
    margin:1.1rem auto;
  }
  .five-2{
    width: 25rem;
    height: 12.5rem;
    float: left;
    background: #ffffff;
    border:1px solid #d3d3d3;
  }
  .five-2-item>p{
    padding-left: 0.9rem;
  }
.five-2-item ul{
  list-style: none;
}
  .five-2-item ul li{
    display: inline-block;
    float: left;
    width: 25%;
    text-align: center;
  }
  .five-2-item ul li p{
    text-align: center;
    color: grey;
  }
  .five-2-item ul li img{
    width:70%;
    border-radius: 0.2em;
    box-shadow: 3px 3px #d3d3d3;
  }
</style>
