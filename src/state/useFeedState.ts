import { defineStore } from 'pinia'

export const useFeedState = defineStore('feed-state', {
  state: () => ({
    isScrolled: false,
  }),
  actions: {
    setIsScrolled(isScrolled: boolean) {
      this.isScrolled = isScrolled
    },
  },
})
