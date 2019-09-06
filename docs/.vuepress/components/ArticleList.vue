<template>
  <div class="article-list">
    <el-card
      v-for="item in frontmatter.items" shadow="hover"
      @click.native="handlerClick(item.link)">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description }}
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
      this.$router.push(this.$page.path + link + '.html')
    }
  }
}
</script>

<style lang="stylus">
.article-list
  .el-card
    margin 10px 0
    cursor pointer
    .title
      font-size 18px
      padding-bottom 4px
      &:hover
        color #3eaf7c
    .description
      color #707780
      font-size 16px
</style>