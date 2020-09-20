<template>
  <div class="zhihu">
      <Header />
      <div class="body-box">
        <div class="mycontainer">
          <div class="body-left">
            <div class="left-header">
              <nuxt-link to="/" class="header-link active">推荐</nuxt-link>
              <nuxt-link to="/" class="header-link">关注</nuxt-link>
              <nuxt-link to="/" class="header-link">热榜</nuxt-link>
            </div>
            <div class="left-items">
              <div  v-for="item in infoitems" :key="item.title" class="left-item">
                <p class="item-title">{{item.title}}</p>
                <div class="item-content">
                  <div class="item-image" v-if="item.hasImg">
                    <el-image
                      v-if="item.hasImg"
                      style="width: 190px; height: 105px; border-radius: 4px"
                      :src="item.img"
                      ></el-image>
                  </div>
                  <div class="item-text">
                    {{item.user + ":" + item.text}}
                    <nuxt-link to="/" class="item-more">查看更多</nuxt-link>
                  </div>
                </div>
                <div class="item-footer">
                  <el-button type="primary" size="small">
                    <i class="el-icon-caret-top"></i>
                    <span>赞同</span>
                    <span>{{item.agreeNum}}</span>
                  </el-button>
                  <el-button type="primary" size="small">
                    <i class="el-icon-caret-bottom"></i>
                  </el-button>
                  <button class="item-footer-btn">
                    <i class="el-icon-chat-round"></i>
                    <span>{{item.commentNum}}</span>
                    <span>条评论</span>
                  </button>
                  <button class="item-footer-btn">
                    <i class="el-icon-s-promotion"></i>
                    <span>分享</span>
                  </button>
                  <button class="item-footer-btn">
                    <i class="el-icon-star-on"></i>
                    <span>收藏</span>
                  </button>
                  <button class="item-footer-btn">
                    <i class="el-icon-s-flag"></i>
                    <span>举报</span>
                  </button>
                  <button class="item-footer-btn">
                    <i class="el-icon-more"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="body-right">
            <div class="right-card">
              <div class="navs">
                <nuxt-link to="/" class="nav-link">
                  <div class="nav-box">
                    <i class="el-icon-document" style="color: #0084ff"></i>
                  </div>
                  <span>回答问题</span>
                </nuxt-link>
                <nuxt-link to="/" class="nav-link">
                  <div class="nav-box">
                    <i class="el-icon-video-camera" style="color: #ff9607"></i>
                  </div>
                  <span>发视频</span>
                </nuxt-link>
                <nuxt-link to="/" class="nav-link">
                  <div class="nav-box">
                    <i class="el-icon-edit-outline" style="color: #f4c807"></i>
                  </div>
                  <span>写文章</span>
                </nuxt-link>
                <nuxt-link to="/" class="nav-link">
                  <div class="nav-box">
                    <i class="el-icon-s-opportunity" style="color: #26bfbf"></i>
                  </div>
                  <span>写想法</span>
                </nuxt-link>
              
              </div>
              <div class="nav-bottom">
                <nuxt-link to="/" class="nav-bottom-item" style="border-right: 1px solid #f6f6f6">稍后答</nuxt-link>
                <nuxt-link to="/"  class="nav-bottom-item">草稿箱</nuxt-link>
              </div>
            </div>
            <div class="right-card">
              <div class="card-header">
                <nuxt-link to="/"  class="nav-bottom-item">
                  <i class="el-icon-user-solid"></i>
                  创作中心
                  <span class="user-lv">Lv{{user.lv}}</span>
                </nuxt-link>
                 <nuxt-link to="/"  class="nav-bottom-item" style="text-align:right">></nuxt-link>
              </div>
              <div class="card-content">
                <div class="card-content-item" style="border-right:1px solid #f6f6f6">
                  <div>昨日被阅读数</div>
                  <div class="content-num">0</div>
                  <div>较前日--</div>
                </div>
                <div class="card-content-item">
                  <div>昨日获赞同数</div>
                  <div class="content-num">0</div>
                  <div>较前日--</div>
                </div>
              </div>
              <div class="card-footer">
                瓦力保镖为您的创作提供持续保护
              </div>
            </div>
            <div class="right-card"></div>
            <div class="right-card"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { Button, Select, Input, Checkbox, Badge} from 'element-ui'
Vue.component(Button.name, Button, Input, Checkbox, Badge)
Vue.component(Select.name, Select, Input, Checkbox, Badge )
export default {
  name: 'zhihu',
  computed: {

  },
  data () {
    return {
      searchtext: '',
      infoitems: [
        {
          title: "如何看待官宣 Xbox Series S ,并公布售价 299 美元",
          img: "/itemimg.png",
          user: "xxingk",
          text: "别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的...",
          agreeNum: 235,
          commentNum: 31,
          hasImg: true,
          
        },
        {
          title: "如何看待官宣 Xbox Series S ，并公布售价 299 美元？",
          img: "111111",
          user: "xxingk",
          text: "别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的....",
          agreeNum: 235,
          commentNum: 31,
          hasImg: false
        },
        {
          title: "如何看待官宣 Xbox Series S ，并公布售价 299 美元？1",
          img: "/item-img.jpeg",
          user: "xxingk",
          text: "别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的....",
          agreeNum: 235,
          commentNum: 31,
          hasImg: true
        },
        {
          title: "如何看待官宣 Xbox Series S3 ,并公布售价 299 美元",
          img: "/itemimg.png",
          user: "xxingk",
          text: "别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的...",
          agreeNum: 235,
          commentNum: 31,
          hasImg: true,
          
        },
        {
          title: "如何看待官宣 Xbox Series S2 ,并公布售价 299 美元",
          img: "/itemimg.png",
          user: "xxingk",
          text: "别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的别说外观价格了，现在连预热视频都直接泄露出来了，这次如此彻底的泄露我都怀疑是不是微软的...",
          agreeNum: 235,
          commentNum: 31,
          hasImg: true,
          
        },
      ],
      user: {
        lv: 3
      }
    }
  },
  methods: {
    
  },
}
</script>
<style scoped>
  .body-left {
    width: 695px;
    margin-right: 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(18, 18, 18, .1);
  }
  .body-right {
    width: 305px;
  }
  .left-item {
    padding: 20px;
    border-bottom: 1px solid #f0f2f7;
  }
  .item-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
  }
  .item-content {
    display: flex;
  }
  .item-image {
    width: 190px;
    height: 105px;
    margin-right: 10px;
  }
  .item-text {
    overflow: hidden;
    line-height: 1.67;
    font-size: 15px;
    color: #1a1a1a;
  }
  .item-more {
    color: #175199;
  }
  .item-footer {
    padding-top: 10px;
  }
  .item-footer-btn {
    background: transparent;
    border: 0;
    font-size: 14px;
    color: #8590a6;
    margin-left: 15px;
  }
  .right-card {
    background: #fff;
    box-shadow: 0 1px 3px rgba(18, 18, 18, .1);
    margin-bottom: 10px;
  }
  .navs {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
  }
  .nav-link {
    font-size: 12px;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
  .nav-box {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .nav-bottom {
    display: flex;
  }
  .nav-bottom-item {
    text-align: center;
    font-size: 14px;
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px 0;
  }
  .card-header {
    margin: 0 15px;
    display: flex;
    justify-content: space-between;
  }
  .user-lv {
    color: rgb(0, 132, 255);
  }
  .card-content {
    margin: 10px;
    border-bottom: 1px solid #f6f6f6;
    display: flex;
  }
  .card-content-item {
    margin: 10px 0;
    font-size: 12px;
    color: #8590a6;
    width: 50%;
    text-align: center;
  }
  .card-content-item div  {
    line-height: 24px;
  }
  .content-num {
    color: #444;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  .card-footer {
    padding: 0 20px 10px 20px;
    font-size: 12px;
    color: #8590a6;
  }
  
  html,body{
      height: 100%;
      margin: 0;
      padding: 0;
  }

</style>