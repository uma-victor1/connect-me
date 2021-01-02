export const namespaced = true

export const state = {
  notifications: []
}
let next = 1
export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: next++
    })
  },
  REMOVE_NOTIFICATION(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}
export const actions = {
  add({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('REMOVE_NOTIFICATION', notificationToRemove)
  }
}
