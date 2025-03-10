import { getDistrictList, getProvinceList, getWardList } from "@/application/api/address-vn";
import { useSWRGetJSON } from "@/application/use-api-swr";
import { District, Province, Ward } from "@/domain/type";

export const useProvinceVN = () => {
  const {
          data,
          isLoading,
          error,
        }: {
    data: Province[], isLoading: boolean, error: any
  } = useSWRGetJSON(getProvinceList, {placeHolderSWRKey: 'get-provinces'})

  return {
    data,
    isLoading,
    error
  }
}

export const useDistrictVN = (id?: string) => {
  const {
          data,
          isLoading,
          error,
        }: {
    data: District[], isLoading: boolean, error: any
  } = useSWRGetJSON(getDistrictList, id ? {id: id} : null)

  return {
    data,
    isLoading,
    error
  }
}
export const useWardsVN    = (id?: string) => {
  const {
          data,
          isLoading,
          error,
        }: {
    data: Ward[], isLoading: boolean, error: any
  } = useSWRGetJSON(getWardList, id ? {id: id} : null)

  return {
    data,
    isLoading,
    error
  }
}

