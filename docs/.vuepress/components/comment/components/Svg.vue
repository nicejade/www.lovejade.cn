<template>
  <span class="gt-ico">
    <span class="gt-svg" v-html="svgHtml()"></span>
  </span>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    svgHtml() {
      return require(`!!raw-loader!../assets/icon/${this.name}.svg`).default
    }
  }
}
</script>