import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isSetup: false,
    isAuthenticated: false,
  }),
  getters: {
    userShouldLogin: state => state.isSetup && !state.isAuthenticated,
  },
})
