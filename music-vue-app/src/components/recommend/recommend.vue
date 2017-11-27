<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <!--热门推荐-->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in discList">
              <div class="icon">
                <img style="width:60px;height:60px;" v-lazy="item.imgurl" >
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
          <div>


          </div>
        </div>
    </div>

    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from '../../api/recommend'
  import {ERR_OK} from '../../api/dataConfig'
  import Slider from '../../base/slider/slider'
  import Scroll from '../../base/scroll/scroll'

  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            console.log('ddd', res.data.list)
            this.discList = res.data.list
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      }
    },
    components: {
      Slider,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend {
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
  }

  .recommend-content {
    height: 100%
    overflow: hidden
  }

  .slider-wrapper {
    position: relative
    width: 100%
    overflow: hidden
  }
  .list-title{
    height: 65px;
    line-height: 65px;
    color :$color-theme;
    text-align :center;
    font-size :$font-size-medium;
  }
  .item{
    display :flex;
    flex-direction :row;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
  }
  .icon{
    flex: 0 0 60px
    width: 60px
    padding-right: 20px
  }

  .text{
    display: flex
    flex-direction: column
    justify-content: center
    flex: 1
    line-height: 20px
    overflow: hidden
    font-size: $font-size-medium
  }
    .name{
      margin-bottom: 10px
      color: $color-text
    }
    .desc{
      color: $color-text-d
    }

</style>
