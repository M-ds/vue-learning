<script setup>
import { ref } from "vue";
// ref =  Reactive references.
const colours = ref(["purple", "gold", "pink", "blue", "red"]);
const show = ref(false);
</script>

<template>
  <button @click="show = !show">toggle</button>
  <div v-if="show">
    <h1 v-purple>Purple Cat Software</h1>
    <h1 v-switching-color:normal.underline.textcenter="colours">
      Purple Cat Software
    </h1>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
