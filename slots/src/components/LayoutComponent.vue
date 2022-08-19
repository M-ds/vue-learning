<template>
  <div class="layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "LayoutComponent",
};
</script>

<style scoped>
.layout {
  border-top-color: green;
  border-top: 100px;
}
</style>
