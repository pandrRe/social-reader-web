<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getChannelItems } from '~/api/channel'
import useCurrentChannel from '~/composables/useCurrentChannel'
import { useFeedState } from '~/state/useFeedState'

const { channel, channelId } = useCurrentChannel()
const enabled = computed(() => channelId && Boolean(channel))
const { data, isLoading, isError } = useQuery(
  ['channel', 'items', channelId],
  () => channelId.value ? getChannelItems(channelId.value) : Promise.resolve([]),
  { enabled },
)

const feedViewer = ref<HTMLElement | undefined>()
const feedState = useFeedState()

function setIsScrolled(event: Event) {
  feedState.setIsScrolled((event.target as HTMLElement).scrollTop > 0)
}

watchEffect((onCleanup) => {
  if (feedViewer.value) {
    feedViewer.value.addEventListener('scroll', setIsScrolled)
    onCleanup(() => {
      feedViewer.value && feedViewer.value.removeEventListener('scroll', setIsScrolled)
    })
  }
})
</script>

<template>
  <section ref="feedViewer" w="50vw" px-6 class="feed-viewer" bg-neutral-800 overflow-auto>
    <div v-if="isLoading" text="xl center">
      Loading...
    </div>
    <div v-else-if="isError" text="xl center">
      An error occurred while fetching feed items.
    </div>
    <ol v-else-if="data && data.length > 0" class="article-list">
      <li v-for="item in data" :key="item.id">
        <article pb-10 pt-4 border="b-1 neutral-700">
          <header p-4 flex items-center>
            <h2 text-xl inline-block font-semibold>
              {{ item.title }}
            </h2>
            <div inline-block px-2>
              <a v-if="item.link" class="text-zinc-500 hover:text-blue-300" :href="item.link" rel="noopener noreferral" target="_blank" flex items-center>
                <div inline-block class="i-carbon-link" />
              </a>
            </div>
          </header>
          <main p="x-8" v-html="item.description" font-body />
        </article>
      </li>
    </ol>
    <div v-else-if="data && data.length === 0" text="xl center">
      Oops... Looks like this feed has no publications in it.
    </div>
  </section>
  <section v-if="feedState.isScrolled" w="25vw" p-6>
    <h1 text-xl>{{ channel.rss_channel.title }}</h1>
  </section>
</template>

<style scoped>
.feed-viewer {
  max-height: calc(100vh - 3rem);
  height: calc(100vh - 3rem);
  position: relative;
  z-index: 100;
}
</style>

<style>
.article-list ol {
  list-style: decimal inside;
  display: block;
}

.article-list main a {
  color: #93C5FD;
}

.article-list main strong {
  display: block;
}
</style>
