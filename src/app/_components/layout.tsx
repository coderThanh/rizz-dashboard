'use client'

import { DashBoardAside } from '@/app/_components/dashboard-aside/indext'
import { Footer } from '@/app/_components/footer'
import { Header } from '@/app/_components/header'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export enum LayoutKind {
  default = 'default',
  empty = 'empty',
  noAside = 'noAside',
}

type DashboardLayoutProps = {
  className?: string
  children?: React.ReactNode
  kind?: LayoutKind
}
export const DashboardLayout = ({
  className,
  children,
  kind = LayoutKind.default,
}: DashboardLayoutProps) => {
  const { isOpenDesktop } = useSelector(
    (state: RootState) => state.dashboardAside,
  )
  //
  var content

  switch (kind) {
    case LayoutKind.empty:
      content = <main>{children}</main>
      break

    case LayoutKind.noAside:
      content = (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )
      break

    default:
      content = (
        <div
          className={`relative md:grid transition-all ${
            isOpenDesktop
              ? 'grid-cols-[var(--dashboard-side-w)_1fr]'
              : 'grid-cols-[var(--dashboard-side-collapse-w)_1fr]'
          }`}
        >
          <DashBoardAside />
          <main className="relative">
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      )
  }

  return content
}
