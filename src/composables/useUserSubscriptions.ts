import { useQuery } from 'vue-query'
import { getUserSubscriptions } from '~/api/channel'

export default function useUserSubscriptions() {
  return useQuery(['userSubscriptions'], getUserSubscriptions)
}
