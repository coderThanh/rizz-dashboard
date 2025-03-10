import { useDistrictVN, useProvinceVN, useWardsVN } from "@/application/hooks/use-address-vn";
import { notifyError, notifySuccess } from "@/ultil/toast";
import { useCallback, useEffect, useRef, useState } from "react";

import { District, Province, Ward } from '@/domain/type'


export const UseEventClickOutside = (AutoCloseClickInsite: boolean) => {
  const [isShow, setIsShow] = useState(false)

  const refPopup = useRef<null | HTMLElement>(null)

  const changeShow = useCallback((status: boolean) => {
    setIsShow(status)
  }, [])

  const documentListener = useCallback((e: MouseEvent) => {
    if(refPopup.current && !refPopup.current.contains(e.target as Node)) {
      setIsShow(false)
    }

    if(refPopup.current && refPopup.current.contains(e.target as Node) && AutoCloseClickInsite) {
      setIsShow(false)
    }
  }, [])

  useEffect(() => {
    if(isShow) {
      document.addEventListener('click', documentListener)
    } else {
      document.removeEventListener('click', documentListener)
    }

    return () => {
      document.removeEventListener('click', documentListener)
    }
  }, [
    isShow,
    documentListener
  ])

  return {
    isShow,
    changeShow,
    refPopup
  }
}

export const UseCopyToClipboard = () => {

  const copyToClipboard = async(text: string) => {
    if(!text) return

    try {
      await navigator.clipboard.writeText(text);
      notifySuccess('Copied to clipboard');

    } catch(error) {
      notifyError('Failed to copy to clipboard');
    }
  }
  return {
    copyToClipboard
  }
}

export const UseAddressVN = () => {
  const [provinceCurrent, setProvinceCurrent] = useState<null | Province>(null)

  const [districtCurrent, setDistrictCurrent] = useState<null | District>(null)

  const [wardCurrent, setWardCurrent] = useState<null | Ward>(null)

  const [provinceList, setProvinceList] = useState<Province[]>([])

  const [districtList, setDistrictList] = useState<District[]>([])

  const [wardList, setWardList] = useState<Ward[]>([])

  const {
          data: provinceRes,
          isLoading: isLoadingProvince
        } = useProvinceVN()

  const {
          data: districtRes,
          isLoading: isLoadingDistrict
        } = useDistrictVN(provinceCurrent?.matt)

  const {
          data: wardsRes,
          isLoading: isLoadingWard
        } = useWardsVN(districtCurrent?.maqh)

  const handleChangeProvinces = useCallback((index: number) => {
    if(provinceList[index].matt == provinceCurrent?.matt) {
      return
    }

    setProvinceCurrent(provinceList[index])

    setDistrictCurrent(null)

    setWardCurrent(null)
    setWardList([])
  }, [
    provinceList,
    provinceCurrent
  ])

  const handleChangeDistrict = useCallback((index: number) => {
    if(districtList[index].maqh == districtCurrent?.maqh) {
      return
    }

    setDistrictCurrent(districtList[index])

    setWardCurrent(null)
    setWardList([])
  }, [
    districtList,
    districtCurrent
  ])

  const handleChangeWard = useCallback((index: number) => {
    if(wardList[index].mapx == wardCurrent?.mapx) {
      return
    }

    setWardCurrent(wardList[index])
  }, [
    wardList,
    wardCurrent
  ])

  const getIndexProvince = useCallback((value: string) => {
    if(!value) return null

    const index = provinceList.findIndex((item) => item.matt === value)

    return index === -1 ? 0 : index
  }, [provinceList])

  const getIndexDistrict = useCallback((value: string) => {
    if(!value) return null

    const index = districtList.findIndex((item) => item.maqh === value)

    return index === -1 ? 0 : index
  }, [districtList])

  const getIndexWard = useCallback((value: string) => {
    if(!value) return null

    const index = wardList.findIndex((item) => item.mapx === value)

    return index === -1 ? 0 : index
  }, [wardList])

  useEffect(() => {
    setProvinceList(provinceRes)
  }, [provinceRes])

  useEffect(() => {
    setDistrictList(districtRes)
  }, [districtRes])

  useEffect(() => {
    setWardList(wardsRes)
  }, [wardsRes])

  return {
    provinceCurrent,
    districtCurrent,
    wardCurrent,
    provinceList,
    districtList,
    wardList,
    isLoadingDistrict,
    isLoadingWard,
    isLoadingProvince,
    handleChangeProvinces,
    handleChangeDistrict,
    handleChangeWard,
    getIndexProvince,
    getIndexWard,
    getIndexDistrict
  }
}
