<script setup>
import { ref } from "vue";

// ref =  Reactive references.
const header = ref("Shopping List App");
const editing = ref(false);
const items = ref([
  { id: 1, label: "10 party hats", purchased: true, highPriority: false },
  { id: 2, label: "2 board games", purchased: true, highPriority: false },
  { id: 3, label: "20 cups", purchased: false, highPriority: true },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);

const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value,
  });
  // We need to call the .value on ref properties.
  newItem.value = "";
  newItemHighPriority.value = "";
};
const doEdit = (e) => {
  editing.value = e;
  newItem.value = "";
};
const togglePurchased = (item) => {
  item.purchased = !item.purchased;
};
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add item
    </button>
  </div>

  <form v-if="editing" class="add-item-form" @submit.prevent="saveItem">
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button class="btn btn-primary" :disabled="newItem.length < 5">
      Save item
    </button>
  </form>
  <ul>
    <li
      @click="togglePurchased(item)"
      v-for="item in items"
      class="static-class"
      :class="{ strikeout: item.purchased, priority: item.highPriority }"
      :key="item.id"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>

<style lang="scss">
//
</style>
