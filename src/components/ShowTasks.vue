<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
      <ShowTask
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import ShowTask from "./ShowTask";
export default {
  name: "ShowTasks",
  props: {
    tasks: Array,
  },
  components: {
    ShowTask,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>