import React, { ReactNode } from 'react'
import { SWRConfig, SWRConfiguration } from 'swr'

import Popup from '@/app/_components/popup/popup'
import StoreProvider from '@/app/_components/provider'

/**
 * The root component of the app.
 *
 * This component is responsible for rendering the app's layout. It includes
 * the header, main content area, footer, and popup.
 *
 * @param {ReactNode} [children] The content to render in the main area.
 * @returns {JSX.Element} The rendered component.
 */

export type WrapperType = { children?: ReactNode }

export const Wrapper = ({ children }: WrapperType) => {
  return (
    <>
      <WrapSWRConfig>
        <StoreProvider>
          {children}
          <Popup />
        </StoreProvider>
      </WrapSWRConfig>
    </>
  )
}

/**
 * Wrap SWRConfig component to handle global options.
 *
 * Global options will be merged with component's options.
 *
 * @param {SWRConfiguration} [options] - Global options for SWRConfig.
 * @param {ReactNode} [children] - Children components.
 * @returns {ReactElement} SWRConfig component with global options.
 */
export default function WrapSWRConfig({
  options,
  children,
}: {
  options?: SWRConfiguration
  children?: ReactNode
}): ReactNode {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: true,
        ...options,
      }}
    >
      {children}
    </SWRConfig>
  )
}
