<script setup>
import { reactive } from "vue";

/*
 * Differences between ref and reactive.
 * ref works on Primitives (String, Number, Boolean)
 * reactive works only on Objects and Arrays.
 * ---
 * reactive does not need to be value defined
 * ref always refers to a value with value
 * ---
 * reactive is not easily replaced. Thus, it makes it difficult to create an new stat object.
 */
const state = reactive({ count: 0 });
const increment = () => {
  state.count++;
};
</script>

<template>
  <hr />
  <h1>{{ state.count }}</h1>
  <button @click="increment">Increment count</button>
</template>
