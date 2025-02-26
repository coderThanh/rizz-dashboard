import React, {ReactNode} from 'react'
import {SWRConfig, SWRConfiguration} from 'swr'

import Popup from '@/app/_components/popup/popup'
import StoreProvider from '@/app/_components/provider'
import {ConfigProvider} from "antd";

import vi_VN from 'antd/locale/vi_VN'

import 'dayjs/locale/vi'

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

export const Wrapper = ({children}: WrapperType) => {
  return (<>
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            horizontalItemPadding: '0px 25px 5px',
            itemSelectedColor: 'rgb(var(--color-text-title))',
            horizontalItemGutter: 0,
            horizontalMargin: '0',

          }, // Dropdown: {paddingBlock: '5px 12px 5px'},
        }
      }}
      locale={{
        ...vi_VN
      }}
    > < WrapSWRConfig> < StoreProvider> {children}
      <Popup/>
    </StoreProvider>
    </WrapSWRConfig>
    </ConfigProvider>
  </>)
}


export const WrapSWRConfig = ({
  options,
  children,
}: {
  options?: SWRConfiguration
  children?: ReactNode
}): ReactNode => {
  return (<SWRConfig
    value={{
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: true, ...options,
    }}
  >
    {children}
  </SWRConfig>)
}
