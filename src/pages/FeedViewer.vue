<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getChannelItems } from '~/api/channel'
import useCurrentChannel from '~/composables/useCurrentChannel'

const { channel, channelId } = useCurrentChannel()
const enabled = computed(() => channelId && Boolean(channel))
const { data, isLoading, isError } = useQuery(
  ['channel', 'items', channelId],
  () => channelId.value ? getChannelItems(channelId.value) : Promise.resolve([]),
  { enabled },
)
</script>

<template>
  <section ref="feedViewer" w="50vw" px-6 class="feed-viewer" bg-zinc-900 overflow-auto>
    <div v-if="isLoading" text="xl center">
      Loading...
    </div>
    <div v-else-if="isError" text="xl center">
      An error occurred while fetching feed items.
    </div>
    <ol v-else-if="data && data.length > 0" class="article-list">
      <li v-for="item in data" :key="item.id">
        <article mb-6>
          <h2 text-xl p-4>
            {{ item.title }}
          </h2>
          <main p="x-8" v-html="item.description" />
        </article>
      </li>
    </ol>
    <div v-else-if="data && data.length === 0" text="xl center">
      Oops... Looks like this feed has no publications in it.
    </div>
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

.article-list a {
  color: #93C5FD;
}

.article-list strong {
  display: block;
}
</style>
