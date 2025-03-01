import { restTransport } from "@/application/api-by-axios";
import { RestOptions } from '@/domain/type'

const {get} = restTransport()

export const getProvinceList = async(options?: {
  string: string | number
}) => {
  return await get('/vn-address/province.json', options)
}

export const getDistrictList = async({
  id,
  options,
}: {
  id: string
  options?: RestOptions
}) => {
  return await get(`/vn-address/district/${id}.json`, options)
}

export const getWardList = async({
  id,
  options,
}: {
  id: string
  options?: RestOptions
}) => {
  return await get(`/vn-address/wards/${id}.json`, options)
}
