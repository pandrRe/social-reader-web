import useChannelFromSubscriptions from '~/composables/useChannelFromSubscriptions'

export default function useCurrentChannel() {
  const route = useRoute()
  const channelId = computed(() => route.params.channelId as string)

  return { channel: useChannelFromSubscriptions(channelId), channelId }
}
