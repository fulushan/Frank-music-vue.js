<template>
  <div class="m-header">
    <div class="icon_logo"></div>
    <div class="text_title">Frankie Music</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .m-header {
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
  }

  .icon_logo {
    display: inline-block
    vertical-align: top
    margin-top: 6px
    width: 30px
    height: 32px
    margin-right: 9px
    bg-image('logo')
    background-size: 30px 32px
  }

  .text_title {
    display: inline-block
    vertical-align: top
    line-height: 44px
    font-size: $font-size-large
  }

  .mine {
    position: absolute
    top: 0
    right: 0
  }

  .icon-mine {
    display: block
    padding: 12px
    font-size: 20px
    color: $color-theme
  }

</style>
