<template>
    <section class="msite">
      <!--首页头部-->

      <header-top :title="address.name">
        <router-link slot="search" to="/search" class="header_search">
         <i class="iconfont icon-sousuo"></i>
        </router-link> <router-link slot="login" to="/login" class="header_login">
          <span class="header_login_text">登录|注册</span>
      </router-link>
      </header-top>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index" >
              <a href="javascript:" class="link_to_food"  v-for="(category,index) in categorys" :key="index">
                <div class="food_container" >
                  <img :src="imaBaseUrl+category.image_url">

                </div>
                <span>{{category.title}}</span>
              </a>

            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList></ShopList>
      </div>
    </section>
</template>

<script>

import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import  {mapState} from 'vuex'


import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'


export default {
  components: {
    HeaderTop,
    ShopList
  },
  data (){
    return {
      imaBaseUrl: 'https://fuss10.elemecdn.com',
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
  computed: {
    ...mapState(['address','categorys']),
    categorysArr () { //一个二维数组

      const max = 8
      const arr=[]

      //把一维数组取出来
      const {categorys} =this

      let smartArr = []

      categorys.forEach( c => {
        if(smartArr.length === 0){
          arr.push(smartArr) //两个数组建立关联
        }
        smartArr.push(c)
        if(smartArr.length === max){
          smartArr = []
        }

      })
      return arr;

    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
