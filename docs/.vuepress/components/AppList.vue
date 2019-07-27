<template>
  <div class="article-list">
    <el-card
      v-for="item in frontmatter.items" shadow="hover" :key="item.link"
      @click.native="handlerClick(item.link)">
      <div class="content">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
        <img class="link-icon" :src="item.icon" :alt="item.title">
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",

  computed: {
    frontmatter () {
      return this.$page.frontmatter
    }
  },

  mounted () {
  },

  methods: {
    handlerClick (link) {
      window.open(link)
    }
  }
}
</script>

<style lang="stylus">
.article-list
  .el-card
    margin 10px
    cursor pointer
    position relative
    .content
      width 100%
      min-height 100px
      .left
        width calc(100% - 120px)
        margin-right 120px
        .title
          font-size 18px
          font-weight 700
          padding-bottom 4px
          color #333
          &:hover
            color #409eff
        .description
          color #707780
          font-size 16px
      .link-icon
        position absolute
        right 0
        top 50%
        bottom 0
        transform translateY(-50%)
        width 100px
</style>