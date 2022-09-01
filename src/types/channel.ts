export interface IChannelSubscription {
  id: number
  user_id: number
  channel_id: number
  channel: IChannel
}

export interface IChannel {
  id: number
  xml_source: string
  type: 'atom' | 'rss'
  atom_feed: IAtomFeed | null
  rss_channel: IRssChannel | null
  ttl: number
}

export interface IAtomFeed {
  title: string
}

export interface IRssChannel {
  title: string
  link: string
  description: string
  pub_date: string
  last_build_date: string
  image: string
  channel_id: number
}

export interface IRssItem {

}

export interface IAtomEntry {}

export type TItem = IRssItem | IAtomEntry
