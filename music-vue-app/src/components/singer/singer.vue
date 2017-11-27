<template>
  <div>
    歌手页面
  </div>
</template>

<script type="text/ecmascript-6">
  import { ERR_OK } from '../../api/dataConfig'
  import { getSingerList } from '../../api/singer'

  export default {
    data () {
      return {
        singerList: []
      }
    },
    created () {
      this._getSingerList()
    },
    methods: {
      _getSingerList () {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.singerList = res.data.list
          }
        })
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
