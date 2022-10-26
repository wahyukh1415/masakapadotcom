<template>
  <div v-if="isVisible" class="loading-page">
    <p class="loading"></p>
  </div>
</template>

<script>
export default {
  props: ({
    isVisible: {type: Boolean, required: false},
    text: {type: String, required: false, default: ""},
  })
}
</script>

<style scoped>
.loading-page {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999999;
    cursor: pointer;
}
.loading {
    position: absolute;
    top: 50%;
    left: 53%;
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin-top: -100px;
    margin-left: -100px;
    perspective: 600px;
    border: 4px solid #d53369;
    border-radius: 50%;
    border-top-color: #daae51;
    border-bottom-color: #5fff2f;
    border-left-color: lightgray;
    animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>