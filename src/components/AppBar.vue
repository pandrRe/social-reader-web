<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getSessionUser, logout } from '~/api/user'
import useCurrentChannel from '~/composables/useCurrentChannel'
import { useFeedState } from '~/state/useFeedState'

const { data: user } = useQuery(['user'], getSessionUser)
const router = useRouter()
const { channel } = useCurrentChannel()

const feedState = useFeedState()

function requestLogout() {
  logout()
    .then(() => {
      router.push('/')
    })
    .catch(e => console.error('Failed to logout.', e))
}
</script>

<template>
  <header id="app-bar" h-12 flex text-ellipsis whitespace-nowrap overflow-x-hidden>
    <section flex="~ auto" w="25vw">
      <span p="3" flex="none" font="bold" text="indigo-800 dark:blue-300">
        Social Reader
      </span>
      <span p="3" grow>
        Welcome, <span v-if="user">{{ user.name }}</span><span v-else>...</span>!
      </span>
    </section>
    <section w="50vw">
    </section>
    <section w="25vw" flex="~ auto" justify-end>
      <span>
        <button p="3" icon-btn flex="inline" items="center" text="hover:indigo-800 dark:hover:blue-300" @click="requestLogout">
          <div i-carbon-exit m="r-2" text="indigo-800 dark:blue-300" />
          <span>Logout</span>
        </button>
      </span>
    </section>
  </header>
</template>

<style scoped>

</style>
