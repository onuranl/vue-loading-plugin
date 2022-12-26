<template>
  <div
    class="loading"
    :class="classes"
    :style="{ 'background-color': backgroundColor }"
  >
    <img v-if="icon" :src="icon" />
    <img v-else src="./default.gif" />
  </div>
</template>

<script>
export default {
  name: "vueLoading",
  data: () => ({
    loading: false,
    dark: false,
    classes: null,
    icon: null,
    backgroundColor: "#FFFFFF",
  }),
  created() {
    if (this.dark) this.backgroundColor = "#000000";
  },
};
</script>

<style scoped>
.loading {
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>