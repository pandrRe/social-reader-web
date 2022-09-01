<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getSessionUser, logout } from '~/api/user'

const { data: user } = useQuery(['user'], getSessionUser)
const router = useRouter()

function requestLogout() {
  logout()
    .then(() => {
      router.push('/')
    })
    .catch(e => console.error('Failed to logout.', e))
}
</script>

<template>
  <header h-12 id="app-bar" flex>
    <span p="3" flex="none" font="bold" text="indigo-800 dark:blue-300">
      Social Reader
    </span>
    <span p="3" grow>
      Welcome, <span v-if="user">{{ user.name }}</span><span v-else>...</span>!
    </span>
    <span items-center flex>
      <button p="3" icon-btn flex="inline" items="center" text="hover:indigo-800 dark:hover:blue-300" @click="requestLogout">
        <div i-carbon-exit m="r-2" text="indigo-800 dark:blue-300" />
        <span>Logout</span>
      </button>
    </span>
  </header>
</template>

<style scoped>

</style>
