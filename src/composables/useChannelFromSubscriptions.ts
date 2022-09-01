import type { Ref } from 'vue'
import useUserSubscriptions from '~/composables/useUserSubscriptions'

export default function useChannelFromSubscriptions(channelId: Ref<string>) {
  const { data } = useUserSubscriptions()
  return computed(() => {
    if (!data.value)
      return null
    return data.value.find(subscription => subscription.channel_id === Number(channelId.value))?.channel || null
  })
}
