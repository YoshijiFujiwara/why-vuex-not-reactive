<template>
  <div id="app">
    <h3>なぜか反映されない。。。</h3>
    <b-list-group>
      <b-list-group-item
        v-for="(task, key, index) in allTasks"
        :key="index"
        @click.prevent="
          updateTask({ id: key, updates: { completed: !task.completed } })
        "
        :style="
          task.completed
            ? 'background-color: rgba(51, 255, 100, 0.2);'
            : 'background-color: rgba(255, 147, 51, 0.2)'
        "
      >
        {{ key }}: {{ task.name }} => {{ task.dueDate }}まで
      </b-list-group-item>
    </b-list-group>
    <b-form @submit.prevent="onSubmit" v-if="show" style="margin-top: 50px;">
      <b-form-group id="input-group-1" label="タスクを追加" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="タスク名"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.dueDate"
          required
          placeholder="締め切り"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">追加</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  data() {
    return {
      form: {
        name: "",
        dueDate: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  computed: {
    ...mapGetters("tasks", ["allTasks"])
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "addTask"]),
    onSubmit() {
      this.addTask({ ...this.form, completed: false });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
