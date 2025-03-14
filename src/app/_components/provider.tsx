'use client'

import { ReactNode, useRef } from 'react'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
