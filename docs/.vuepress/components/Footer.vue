<template>
  <div class="icp">
    <span>Copyright © {{ year }}</span>
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="link">粤ICP备17099767号-2</a>
    <img
      src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/zero.gif"
      alt="深圳市市场监督管理局企业主体身份公示"
      class="zero"
    />
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      year: new Date().getFullYear()
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>

<style lang="stylus">
.icp
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem  auto;
  margin-top: 3rem;
  .link
    margin-left: 1rem;
.zero
    height: 1.5rem;
    width: 1.1rem;
    margin-left: .5rem;
    margin-right: 10px;
</style>
