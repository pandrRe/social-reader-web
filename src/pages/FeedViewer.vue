<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getChannelItems } from '~/api/channel'
import useChannelFromSubscriptions from '~/composables/useChannelFromSubscriptions'

const route = useRoute()
const channelId = computed(() => route.params.channelId as string)

const channel = useChannelFromSubscriptions(channelId)
const enabled = computed(() => Boolean(channel))
const { data } = useQuery(
  ['channel', 'items', channelId],
  () => getChannelItems(channelId.value),
  { enabled },
)
</script>

<template>
  <section w="70%" class="feed-viewer" overflow-auto>
    <h1 v-if="channel" class="article-list-header" text-3xl p-4 font-bold>
      {{ channel.rss_channel.title }}
    </h1>
    <ol v-if="data && data.length > 0" class="article-list">
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
}

.article-list-header {
  box-sizing: border-box;
  height: 4rem;
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
