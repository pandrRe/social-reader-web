import { api } from '~/api/index'
import type { IChannelSubscription } from '~/types/channel'

export function getUserSubscriptions() {
  return api.get<IChannelSubscription[]>('/api/subscription').then(res => res.data)
}

export function addUserSubscription(url: string) {
  return api.post<IChannelSubscription>('/api/subscription', { xml_source: url }).then(res => res.data)
}
