<template>
  <div id="app">
    <my-top></my-top>
    <div class="tad">
      <div class="tad-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tad-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tad-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import top from './components/header/v-header.vue';
  import goods from './components/goods/goods.vue';
  import seller from './components/seller/seller.vue';
  import ratings from './components/ratings/ratings.vue';

  export default {
    name: 'app',
    components: {
      goods,
      seller,
      ratings,
      'my-top': top
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tad
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tad-item
        flex: 1
        text-align: center
</style>
