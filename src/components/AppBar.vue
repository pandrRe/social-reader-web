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
  <header id="app-bar" h-12 flex>
    <section flex="~ auto" w="25vw">
      <span p="3" flex="none" font="bold" text="indigo-800 dark:blue-300">
        Social Reader
      </span>
      <span p="3" grow>
        Welcome, <span v-if="user">{{ user.name }}</span><span v-else>...</span>!
      </span>
    </section>
    <section w="50vw">
      <div v-if="channel" bg-neutral-800 rounded-t-2xl h="100%" pt-2 px-10 :class="{ 'border-solid border-b-1 border-zinc-500': feedState.isScrolled }">
        <h1 v-if="!feedState.isScrolled" text-3xl font-semibold>{{ channel.rss_channel.title }}</h1>
        <h2 v-else flex items-center>
          <div inline-block class="i-carbon-chevron-up" mr-2 />
          Back to top
        </h2>
      </div>
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
