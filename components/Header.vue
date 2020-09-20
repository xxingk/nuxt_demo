<template>
  <div class="header">
          <div class="mycontainer">
            <div class="header-box">
              <div class="logo">
                  <nuxt-link to="/">知乎</nuxt-link>
              </div>
              <nuxt-link to="/" class="header-link active">首页</nuxt-link>
              <nuxt-link to="/" class="header-link">发现</nuxt-link>
              <nuxt-link to="/" class="header-link">等你来答</nuxt-link>
               <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="searchtext">
              </el-input>
              <el-button type="primary">提问</el-button>
              <div class="header-right">
                <div>
                  <el-badge :value="3" class="item">
                    <i class="el-icon-message-solid"></i>
                  </el-badge>
                  <el-badge :value="10" class="item">
                    <i class="el-icon-chat-round"></i>
                  </el-badge>
                </div>
                <div class="user-image"></div>
              </div>
            </div>
          </div>
      </div>
</template>

<style>
  a {
    text-decoration: none;
    color: #8590a6
  }
  .nuxt-link-active {
    color: #8590a6;
  }
  a.active {
    color: #444;
    font-weight: 600;
  }
  .left-header, .header-box{
    padding: 10px 0;
    display: flex;
    line-height: 40px;
    width: 100%;
  }
  .left-header {
    font-size: 18px;
    border-bottom: 1px solid #f0f2f7;
  }
  .left-header a {
    color: #1a1a1a;
    font-size: 16px;
  }
  .left-header a.active {
    font-weight: 500;
    color: #0084ff;
  }
  .zhihu {
    background: #f6f6f6;
  }
  .header {
    background: #fff;
    box-shadow: 0 1px 3px rgba(18, 18, 18, .1);
  }
  .body-box {
    margin-top: 10px;
  }
  .mycontainer {
    display: flex;
    width: 1000px;
    margin: 0 auto;
  }
  .header-link {
    font-size: 15px;
    padding: 0 0 0 30px;
  }
  .header-search {
    margin: 0 20px;
    line-height: 30px;
    font-size: 15px;
  }
  .logo a{
    color: rgb(0, 132, 255) !important;
    border: 0;
  }
  .el-input {
    width: 300px;
    margin: 0 20px;
  }
  .header-right {
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-end;
  }
  .header-right .item {
    margin: 0 10px;
  }
  .header-right i{
    font-size: 30px;
    color: #8590a6;
  }
</style>

<script>
  export default {
    name: 'myheader',
    data () {
      return {
        searchtext: '',
      }
    }
  }
</script>