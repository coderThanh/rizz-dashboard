import React, { ReactNode } from 'react'
import { Toaster } from "react-hot-toast";
import { SWRConfig, SWRConfiguration } from 'swr'

import Popup from '@/app/_components/popup/popup'
import StoreProvider from '@/app/_components/provider'

import '@ant-design/v5-patch-for-react-19';

import { ConfigProvider } from "antd";

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

export type WrapperType = {
  children?: ReactNode
}

export const Wrapper = ({children}: WrapperType) => {
  return (<>
    <ConfigProvider
      theme={{
        token: {
          controlHeight: 36,
          controlHeightSM: 28,
          controlHeightLG: 42,
          colorPrimary: '#30b760',
          colorPrimaryHover: '#57d181',
          colorPrimaryActive: '#22974c',
          colorPrimaryBg: '#dff9e8',
          colorPrimaryBgHover: '#c0f2d1',
          colorPrimaryBorder: '#c0f2d1',
          colorPrimaryBorderHover: '#8fe6ad',
          colorPrimaryText: '#30b760',
          colorPrimaryTextHover: '#57d181',
          colorPrimaryTextActive: '#22974c',
          colorBorder: 'rgb(var(--color-secondary)/0.3)'
        },
        components: {
          Button: {
            paddingInlineSM: 10,
            primaryShadow: '',
            dangerShadow: '',
            defaultShadow: '',
            contentFontSizeLG: 14,
            textTextColor: 'rgb(var(--color-text-sub))',
          },
          Tabs: {
            horizontalItemPadding: '0px 25px 5px',
            itemSelectedColor: 'rgb(var(--color-text-title))',
            horizontalItemGutter: 0,
            horizontalMargin: '0',
          },
          Table: {
            headerBg: 'rgb(246 246 250)',
            footerBg: 'rgb(246 246 250)',
            borderColor: 'rgb(var(--color-secondary)/0.15)',
            headerSortActiveBg: 'rgb(228 231 240)',
            headerSortHoverBg: 'rgb(228 231 240)',
            bodySortBg: 'rgb(246 246 250)',
            rowHoverBg: 'rgb(246 246 250)',

          },
          Rate: {
            starSize: 14,
          },
        }
      }}
      locale={{
        ...vi_VN
      }}
    >
      < WrapSWRConfig>
        < StoreProvider>
          {children}
          <Popup/>
          <Toaster/>
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
