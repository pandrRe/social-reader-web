<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getChannelItems } from '~/api/channel'
import useCurrentChannel from '~/composables/useCurrentChannel'
import { useFeedState } from '~/state/useFeedState'
import htmlDecode from '~/lib/htmlDecode'
import { IRssItem } from '~/types/channel'

const { channel, channelId } = useCurrentChannel()
const enabled = computed(() => channelId && Boolean(channel))
const { data, isLoading, isError } = useQuery(
  ['channel', 'items', channelId],
  () => channelId.value ? getChannelItems(channelId.value) : Promise.resolve([]),
  { enabled, staleTime: 30000 },
)

const feedViewer = ref<HTMLElement | undefined>()
const feedState = useFeedState()

function setIsScrolled(event: Event) {
  feedState.setIsScrolled((event.target as HTMLElement).scrollTop > 0)
}

function scrollToTop() {
  if (feedViewer.value)
    feedViewer.value.scrollTo(0, 0)
}

watch(feedViewer, () => feedState.setIsScrolled(false))

watchEffect((onCleanup) => {
  if (feedViewer.value) {
    feedViewer.value.addEventListener('scroll', setIsScrolled)
    onCleanup(() => {
      feedViewer.value && feedViewer.value.removeEventListener('scroll', setIsScrolled)
    })
  }
})

const selectedItem = ref<IRssItem | null>(null)
</script>

<template>
  <section :key="channel" ref="feedViewer" w="50vw" px-6 class="feed-viewer" border="t-1 x-1 gray-700" rounded-t-2xl overflow-auto scroll-smooth>
    <div v-if="channel" sticky top-0>
      <Transition name="header" mode="out-in">
        <header v-if="!feedState.isScrolled" mt-4>
          <h1 text-3xl font-semibold>
            {{ htmlDecode(channel.rss_channel.title) }}
          </h1>
          <h2 v-if="channel.rss_channel.description" font-body mt-2>
            {{ channel.rss_channel.description }}
          </h2>
        </header>
        <h2 v-else flex justify-end text-md>
          <span bg-gray-900 shadow="~ gray-800" mix-blend-overlay opacity-50 hover:opacity-100 flex items-center rounded-md p-3 cursor-pointer @click="scrollToTop">
            <div inline-block class="i-carbon-chevron-up" mr-2 />
            Back to top
          </span>
        </h2>
      </Transition>
    </div>
    <div v-if="isLoading" text="xl center">
      Loading...
    </div>
    <div v-else-if="isError" text="xl center">
      An error occurred while fetching feed items.
    </div>
    <ol v-else-if="data && data.length > 0" class="article-list">
      <li v-for="item in data" :key="item.id">
        <article mb-5 mt-5 pt-3 px-4 bg-neutral-800 rounded-md outline="hover:~ 1 neutral-500">
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
          <section class="article-body" px-4 font-body v-html="item.description" />
          <footer px-4 py-4>
            <button v-if="item.content" btn bg="neutral-700 hover:neutral-600" my-2 @click="selectedItem = item">
              Read full content
            </button>
          </footer>
        </article>
      </li>
    </ol>
    <div v-else-if="data && data.length === 0" text="xl center">
      Oops... Looks like this feed has no publications in it.
    </div>
  </section>
  <Transition>
    <section v-if="feedState.isScrolled" w="25vw" p-6>
      <h1 text-2xl font-semibold>
        {{ htmlDecode(channel.rss_channel.title) }}
      </h1>
      <h2 font-body>
        {{ channel.rss_channel.description }}
      </h2>
    </section>
  </Transition>
  <ItemContentModal v-model="selectedItem" />
</template>

<style scoped>
.feed-viewer {
  max-height: calc(100vh - 3rem);
  height: calc(100vh - 3rem);
  position: relative;
  z-index: 100;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(2em);
}

.header-enter-active,
.header-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.header-enter-from,
.header-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
</style>

<style>
.article-list ol {
  list-style: decimal inside;
  display: block;
}

.article-list .article-body a {
  color: #93C5FD;
}

.article-list main strong {
  display: block;
}
</style>
