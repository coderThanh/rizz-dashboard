'use client'

import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'

import { AsideMenuItemtype } from '@/domain/type'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTERS } from '@/ultil/router'
import { RootState } from '@/redux/store'
import SystemLink from '@/app/_components/link'
import { changeAsideDesktopStatus, changeAsideMobileStatus } from '@/redux/feature/main-aside'

type DashBoardAsideProps = { className?: string }
export const DashBoardAside = (props: DashBoardAsideProps) => {
  const dispatch = useDispatch()

  const {isOpenDesktop} = useSelector((state: RootState) => state.dashboardAside,)

  const openAsideDesktop = useCallback(() => {
    dispatch(changeAsideDesktopStatus(true))
  }, [dispatch])

  return (
    <div className={`${props?.className ?? ''} min-h-[100vh] fixed top-0 left-0 z-[100] shadow-1 hidden md:block`}>
      <div
        className={`bg-bg h-[100vh] overflow-x-hidden overflow-y-auto scrollbar    ${isOpenDesktop ? 'w-[var(--dashboard-side-w)]' : 'w-[var(--dashboard-side-collapse-w)] cursor-pointer'}`}
        onClick={() => !isOpenDesktop && openAsideDesktop()}
      >
        <DashboardAsideContent
          className={`${!isOpenDesktop ? 'pointer-events-none' : ''}`}
        />
      </div>
    </div>)
}

export const DashBoardAsideMobile = () => {
  const {isOpenMobile} = useSelector((state: RootState) => state.dashboardAside)

  const dispatch = useDispatch();

  const toggleAside = useCallback((status: boolean) => {
    dispatch(changeAsideMobileStatus(status))
  }, [dispatch])

  return (<div
    className={`fixed top-0 left-0 w-full h-full z-[500] overflow-hidden isolate ${isOpenMobile ? ' pointer-events-auto' : 'pointer-events-none'}`}
  >
    <div className={`relative w-full h-full `}>
      <div
        className={`relative z-50 bg-bg h-[100vh] overflow-x-hidden overflow-y-auto scrollbar w-[var(--dashboard-side-w)] transition-all duration-300 ${isOpenMobile ? 'translate-x-[0%]' : 'translate-x-[-100%]'}`}
      >
        <DashboardAsideContent/>
      </div>
      <div
        onClick={() => toggleAside(false)}
        className={`absolute top-0 left-0 w-full h-full bg-[rgb(var(--bg-opposite),0.8)] z-[20] transition-all duration-300 cursor-pointer ${isOpenMobile ? 'opacity-100' : 'opacity-0'}`}
      ></div>
    </div>
  </div>)
}


type DashboardAsideContentProps = { className?: string }
export const DashboardAsideContent = (props: DashboardAsideContentProps) => {
  const {isOpenDesktop} = useSelector((state: RootState) => state.dashboardAside,)
  return (<div className={`${props?.className ?? ''} pb-[40px]`}>
    {/* logo */}
    <div className="text-center mt-[40px] mb-[30px]">
      <Link
        href={ROUTERS.home}
        className="inline-block mx-auto"
      >
        {isOpenDesktop && (<Image
          src={'/asset/logo/logo-dark.png'}
          alt="logo"
          width={100}
          height={50}
        />)}
        {!isOpenDesktop && (<Image
          src={'/asset/logo/favicon.ico'}
          alt="logo"
          width={37.5}
          height={37.5}
        />)}
      </Link>
    </div>
    {/* menu */}
    <AsideGroupTitle title={'MENU MAIN'}/>
    <AsideMenuItem
      title={'Dashboards'}
      iconName="home"
      items={[
        {
          url: '', title: 'Analytics',
        }, {
          url: ROUTERS.home, title: 'Ecommerce',
        },
      ]}
    />
    <AsideGroupTitle
      title={'MENU PRODUCT'}
      isHasMarginTop={true}
    />
    <AsideMenuItem
      title={'Sản phẩm '}
      iconName="package_2"
      items={[
        {
          url: ROUTERS.products, title: 'Tất cả sản phẩm',
        }, {
          url: ROUTERS.productDetail, title: 'Thêm sản phẩm',
        }, {
          url: ROUTERS.productCategory, title: 'Danh mục sản phẩm',
        },
      ]}
    />
    <AsideMenuItem
      title={'Đơn hàng'}
      iconName="sell"
      items={[
        {
          url: ROUTERS.orders, title: 'Tất cả đơn hàng',
        }, {
          url: ROUTERS.orderDetail, title: 'Thêm đơn hàng',
        },
      ]}
    />
    <AsideMenuItem
      title={'Đánh giá '}
      iconName="reviews"
      items={[
        {
          url: ROUTERS.reviews, title: 'Tất cả đánh giá',
        }, {
          url: ROUTERS.reviewDetail, title: 'Thêm đánh giá',
        },
      ]}
    />
    <AsideGroupTitle
      title={'MENU POST'}
      isHasMarginTop={true}
    />
    <AsideMenuItem
      title={'Bài viết '}
      iconName="article"
      items={[
        {
          url: ROUTERS.posts, title: 'Tất cả bài viết',
        }, {
          url: ROUTERS.postDetail, title: 'Thêm bài viết',
        }, {
          url: ROUTERS.productCategory, title: 'Danh mục bài viết',
        }, {
          url: ROUTERS.productCategory, title: 'Thẻ tag',
        },
      ]}
    />
    <AsideMenuItem
      title={'Bình luận'}
      iconName="rate_review"
      items={[
        {
          url: ROUTERS.comments, title: 'Tất cả bình luận',
        }, {
          url: ROUTERS.commentDetail, title: 'Thêm bình luận',
        },
      ]}
    />
    <AsideGroupTitle
      title={'MENU MORE'}
      isHasMarginTop={true}
    />
    <AsideMenuItem
      title={'Thư viện'}
      iconName="image"
      items={[
        {
          url: ROUTERS.media, title: 'Tất cả media',
        }
      ]}
    />
    <AsideMenuItem
      title={'Người dùng'}
      iconName="person"
      items={[
        {
          url: ROUTERS.users, title: 'Tất cả người dùng',
        }, {
          url: ROUTERS.userDetail, title: 'Hồ sơ',
        },
      ]}
    />
    <AsideGroupTitle
      title={'MENU INACTIVE'}
      isHasMarginTop={true}
    />
    <AsideMenuItem
      title={'Cài đặt '}
      iconName="settings"
      items={[
        {
          url: '', title: 'Theme config',
        }, {
          url: '', title: 'Nội dung theme',
        },
      ]}
    />
    <AsideMenuItem
      title={'Dự án'}
      iconName="folder_open"
      items={[
        {
          url: '', title: 'Menu item',
        }, {
          url: '', title: 'Menu item',
        },
      ]}
    />
    <AsideMenuItem
      title={'Hướng dẫn sử dụng'}
      iconName="description"
      items={[
        {
          url: '', title: 'Menu item',
        }, {
          url: '', title: 'Menu item',
        },
      ]}
    />

  </div>)
}

type AsideGroupTitleProps = {
  className?: string
  title: string
  iconClassName?: string
  isHasMarginTop?: boolean
}
export const AsideGroupTitle = (props: AsideGroupTitleProps) => {
  const {isOpenDesktop} = useSelector((state: RootState) => state.dashboardAside,)

  if(!isOpenDesktop) {
    return <div></div>
  }

  return (<div
    className={`${props?.isHasMarginTop && 'mt-[22px] MD:mt-[28px]'} ${props?.className ?? ''} px-[28px] text-[12px] text-sub mb-[5px]`}
  >
    {props.title}
  </div>)
}

type AsideMenuItemProps = {
  className?: string
  title: string
  iconName?: string
  isNotify?: boolean
  items: AsideMenuItemtype[]
}
export const AsideMenuItem = (props: AsideMenuItemProps) => {
  const {items} = props || {}

  const pathName = usePathname()

  const {isOpenDesktop} = useSelector((state: RootState) => state.dashboardAside,)

  const [isCollapse, setIsCollapse]       = useState(true)
  const [isCurrentPage, setIsCurrentPage] = useState(false)
  const [CurrentPage, setCurrentPage]     = useState<null | number>(null)

  const checkCurrentPage = useCallback(() => {
    items.forEach((item, index) => {
      if(item?.isPrefix) {
        if(item?.url && pathName.startsWith(item.url)) {
          setIsCurrentPage(true)
          setIsCollapse(false)
          setCurrentPage(index)

          return
        }
      } else {
        if(item.url === pathName) {
          setIsCurrentPage(true)
          setIsCollapse(false)
          setCurrentPage(index)

          return
        }
      }
    })
  }, [])

  useEffect(() => {
    checkCurrentPage()
  }, [])

  return (<div className={`${props?.className ?? ''} px-[14px]`}>
    <div
      className={`group flex gap-[10px] ${isOpenDesktop ? 'p-[9px_14px]' : 'p-[9px_8px] justify-center'} items-center transition-all duration-300 rounded-radius-1 cursor-pointer relative hover:text-primary ${!isCollapse ? 'bg-[rgb(var(--color-primary),0.05)] ' : ''}  ${isCurrentPage ? '' : ''}`}
      onClick={() => setIsCollapse(!isCollapse)}
    >
        <span
          className={`material-symbols-rounded font-[320] block w-[21px] h-[21px] text-[21px]  translate-y-[-2px] relative`}
        >
          {props?.iconName ? props.iconName : 'question_mark'}
          {props.isNotify && (
            <span className="absolute top-[-2px] left-[-5px] w-[4px] h-[4px] bg-alert rounded-[100px]"></span>)}
        </span>
      <span
        className={`flex-1 text-[13px] leading-[1.1]  ${isOpenDesktop ? '' : 'hidden'}`}
      >
          {props.title}
        </span>
      <span
        className={`material-symbols-rounded font-[300]  text-[18px] w-[18px] ${isOpenDesktop ? '' : '!hidden'}`}
      >
          {isCollapse ? 'keyboard_arrow_right ' : 'keyboard_arrow_down'}
        </span>
      <div
        className={`absolute top-0 left-[-10px] w-[4px] h-full bg-primary rounded-[100px] transition-all duration-300 opacity-0 group-hover:opacity-100 ${!isCollapse || isCurrentPage ? 'opacity-100' : ''}`}
      ></div>
    </div>
    {items?.length > 0 && isOpenDesktop ? (<div className={`${isCollapse ? 'hidden' : ''}`}>
      {items.map((item, index) => (<AsideMenuLink
        key={`aside menu item ${item.title} ${index}`}
        url={`${item.url}`}
        title={item.title}
        isCurrent={index === CurrentPage}
      />))}
    </div>) : null}
  </div>)
}

type AsideMenuLinkProps = {
  className?: string
  title: string
  url?: string
  isCurrent?: boolean
}
export const AsideMenuLink = (props: AsideMenuLinkProps) => {
  return (<SystemLink
    url={`${props?.url}`}
    className={`${props?.className ?? ''} text-[13px] pl-[44px] hover:text-primary py-[12px] transition-colors block  ${props.isCurrent ? 'text-primary' : ''}`}
  >
    {props.title}
  </SystemLink>)
}
