export interface IChannelSubscription {
  id: number
  user_id: number
  channel_id: number
  channels?: IChannel[]
}

export interface IChannel {
  id: number
  xml_source: string
  type: 'atom' | 'rss'
  atomFeed?: IAtomFeed
  rssChannel?: IRssChannel
  ttl: number
}

export interface IAtomFeed {}

export interface IRssChannel {
  title: string
  link: string
  description: string
  pub_date: string
  last_build_date: string
  image: string
  channel_id: number
}
