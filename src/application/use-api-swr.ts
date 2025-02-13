'use client'

import { notifyError, notifySuccess } from '@/ultil/toast'
import { useCallback, useState } from 'react'
import useSWR, { SWRConfiguration } from 'swr'

import { RestOptions } from '@/domain/type'

// This Hook should use for client

export const usePostAPI = (action: any, isAutoShowNotify: boolean = true) => {}

export const useGetDetailById = (
  action: any,
  isAutoShowNotify: boolean = false,
) => {}

export const useGetList = (action: any, isAutoShowNotify: boolean = false) => {}

export const useSWRGetJSON = (
  action: any,
  options?: RestOptions,
  swrConfig?: SWRConfiguration,
  isAutoShowNotify: boolean = false,
) => {
  const { data, error, isLoading } = useSWR(
    options ? [options] : null,
    ([options]) => action(options),
    swrConfig,
  )

  return { isLoading, error, data }
}

export const usePutAPIById = (
  action: any,
  isAutoShowNotify: boolean = true,
) => {}

export const useDeleteAPIById = (
  action: any,
  isAutoShowNotify: boolean = true,
) => {}

const _addLoadingTime = (startTime: number, setLoading: any) => {
  const loadingTime = new Date().getTime() - startTime
  const countDownTime = loadingTime > 200 ? loadingTime : 200
  const timing = setTimeout(() => {
    setLoading(false)
    clearTimeout(timing)
  }, countDownTime)
}
