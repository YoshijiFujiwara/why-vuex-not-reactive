<template>
  <div id="app">
    <h3> なぜか反映されない。。。 </h3>
    <b-list-group>
      <b-list-group-item v-for="(task, key, index) in allTasks"
                         :key="index"
                         @click.prevent="updateTask({ id: key, updates: { completed: !task.completed }})"
                         :style="task.completed ? 'background-color: rgba(51, 255, 100, 0.2);' : 'background-color: rgba(255, 147, 51, 0.2)'">
        {{ key }}: {{ task.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters('tasks', ['allTasks']),
  },
  methods: {
    ...mapActions('tasks', ['updateTask'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
