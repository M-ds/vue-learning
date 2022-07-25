<script setup>
import { ref } from "vue";

// ref =  Reactive references.
const header = ref("Shopping List App");
const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
</script>

<template>
  <h1>{{ header }}</h1>
  <form
    class="add-item-form"
    @submit.prevent="items.push({ id: items.length + 1, label: newItem })"
  >
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button class="btn btn-primary">Save item</button>
  </form>
  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>
</template>

<style lang="scss">
//
</style>
