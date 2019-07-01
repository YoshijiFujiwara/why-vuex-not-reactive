import Vue from 'vue'

export const addTask = (state, payload) => {
    Vue.set(state.tasks, payload.id, payload.task)
}

export const updateTask = (state, payload) => {
    Object.assign(state.tasks[payload.id], payload.updates)
}
