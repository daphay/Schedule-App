<template>
  <header>
    {{ title }}
    <AppButton
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      class="btn"
      :text="viewTask ? 'Close' : 'Add Task'"
      :color="viewTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import AppButton from "./AppButton";
export default {
  name: "AppHeader",
  props: {
    title: String,
    viewTask: Boolean,
  },
  components: {
    AppButton,
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>