'use client'

import { DashBoardAside, DashBoardAsideMobile } from '@/app/_components/dashboard-aside/indext'
import { Footer } from '@/app/_components/footer'
import { Header } from '@/app/_components/header'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import React, { ReactNode } from "react";

export enum LayoutKind {
  default = 'default', empty = 'empty', noAside = 'noAside',
}

type DashboardLayoutProps = {
  className?: string
  mainClass?: string
  children?: ReactNode
  kind?: LayoutKind
}
export const DashboardLayout = ({
  children,
  kind = LayoutKind.default,
  mainClass
}: DashboardLayoutProps) => {
  const {isOpenDesktop} = useSelector((state: RootState) => state.dashboardAside,)
  //
  let content;

  switch(kind) {
    case LayoutKind.empty:
      content = <main className={`relative ${mainClass ?? ''}`}>{children}</main>
      break

    case LayoutKind.noAside:
      content = (<>
        <Header/>
        <main className={`relative ${mainClass ?? ''}`}>{children}</main>
        <Footer/>
        <DashBoardAsideMobile/>
      </>)
      break

    default:
      content = (<div
        className={`relative  transition-all ${isOpenDesktop ? 'md:pl-[var(--dashboard-side-w)]' : 'md:pl-[var(--dashboard-side-collapse-w)]'}`}
      >
        <DashBoardAside/>
        <DashBoardAsideMobile/>
        <main className={`relative  ${mainClass ?? ''} `}>
          <Header/>
          {children}
          <Footer/>
        </main>
      </div>)
  }

  return content
}


