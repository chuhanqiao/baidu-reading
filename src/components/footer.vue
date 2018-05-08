<template>
  <div class="footer">
    <div class="f-one clear-float">
      <div v-for="dataOne in datasOne" :key="dataOne.name"><div>{{dataOne.name}}</div><p>{{dataOne.title}}</p></div>
    </div>
    <div class="f-two clear-float">
      <div>
        <p><strong>帮助</strong></p>
        <p>如何购买图书</p>
        <p>常见问题</p>
        <p>支付方式</p>
      </div>
      <div>
        <p><strong>平台入驻</strong></p>
        <p>机构专区</p>
        <p>个人作者专区</p>
      </div>
      <div>
        <p><strong>投诉与建议</strong></p>
        <p>问题反馈</p>
      </div>
      <div>
        <p><strong>扫描下载客户端</strong></p>
        <img src="" alt="">
      </div>
    </div>
    <div class="f-three">
      <p>如有问题欢迎<a>投诉反馈</a></p>
      <p><span>&copy;2017 Baidu</span><a>使用百度前必读</a><a>平台协议</a><a>企业文库</a><a>百度教育商业服务平台</a><a></a></p>
    </div>
  </div>
</template>
<script>
  export default {
    name:"footering",
    data:function () {
      return{
        datasOne:[
          {name:"海",title:"正版电子书"},
          {name:"量",title:"多平台畅读"},
          {name:"资",title:"海量图书资源"},
          {name:"源",title:"优质阅读"}
        ]
      }
    }
  }
</script>
<style scoped>
  .footer{
    width: 54.5rem;
    margin:0 auto;
  }
  .clear-float:after{
    content: "";
    clear: both;
    display: block;
  }
  .f-one{
    border-bottom: 1px solid #F2F2EB;
  }
  .f-one>div{
    float: left;
    margin:50px 4.5rem;
    text-align: center;
  }
  .f-one>div>div{
    width:3rem;
    height: 3rem;
    border-radius: 1.5rem;
    border:1px solid #58BD5A;
    text-align: center;
    line-height: 3rem;
    color:#58BD5A;
    font-size:20px;
    font-weight: 400;
    display: inline-block;
  }
  .f-one>div>p{
    text-align: center;
    color:#526652;
  }
  .f-one>div:hover p{
    color:#58BD5A;
  }
  .f-two>div{
    float: left;
    width: 16.25rem;
    height: 7.5rem;
  }
  .f-two>div:nth-child(4){
    width: 5.75rem;
  }
  .f-two>div p{
    color:#8D8D8D;
  }
  .f-two>div p:hover{
    color:#bbbbbb;
    cursor: pointer;
  }
  .f-two>div strong{
    color: #7A7A7A;
  }
  .f-three p{
    text-align: center;
    font-size: 14px;
  }
  .f-three p a{
    cursor: pointer;
  }
  .f-three p:nth-child(1){
    color:#888888;
  }
  .f-three p:nth-child(1) a{
    color:#666666;
    text-decoration: solid;
  }
  .f-three p:nth-child(2) a{
    display: inline-block;
    border-right: 1px solid grey;
    color:#2D64B3;
    padding:0px 0.5rem;
  }
</style>
