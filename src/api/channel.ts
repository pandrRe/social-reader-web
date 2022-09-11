import { api } from '~/api/index'
import type { IChannelSubscription, TItem } from '~/types/channel'

export function getUserSubscriptions() {
  return api.get<IChannelSubscription[]>('/api/subscription').then(res => res.data)
}

export function addUserSubscription(url: string) {
  return api.post<IChannelSubscription>('/api/subscription', { xml_source: url }).then(res => res.data)
}

export function getChannelItems(channelId: number | string) {
  return api.get<TItem>(`/api/items?channelId=${channelId}`).then(res => res.data)
}
