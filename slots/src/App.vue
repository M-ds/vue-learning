<template>
  <layout-component>
    <app-button>
      Testing
      <img
        style="width: 50px; height: 50px"
        src="./assets/tent-outdoor-svgrepo-com.svg"
        alt="''"
      />
      Testing
    </app-button>
  </layout-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/AppButton.vue";
import LayoutComponent from "@/components/LayoutComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    AppButton,
    LayoutComponent,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
