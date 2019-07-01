import uniqid from 'uniqid'

export const addTask = ({ commit }, task) => {
    const uniqueId = uniqid()
    const payload = {
        id: uniqueId,
        task
    }
    commit('addTask', payload)
}

export const updateTask = ({ commit }, payload) => {
    commit('updateTask', payload)
}
