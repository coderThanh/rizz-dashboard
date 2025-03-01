import { ROUTERS } from "@/ultil/router";
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { changeAsideDesktopStatus, changeAsideMobileStatus } from '@/redux/feature/main-aside'
import { SystemButtonColor, SystemButtonIcon } from "@/app/_components/button";
import SvgMenu from "@/svg/menu";
import SvgPlus from "@/svg/plus";
import SvgNotification from "@/svg/notification";
import SvgAccount from "@/svg/account";
import { Dropdown, Empty, MenuProps, Tabs, TabsProps } from "antd";
import SystemLink from "@/app/_components/link";
import { LegacyRef, ReactNode, RefObject } from "react";
import { ListTitleType, NotifyType } from "@/domain/type";
import { UseEventClickOutside } from "@/presentation/hooks-global";
import { ListTitle } from "@/app/_components/list-title";

type HeaderProps = { className?: string }
export const Header = (props: HeaderProps) => {
  const {
          isOpenDesktop, isOpenMobile
        } = useSelector((state: RootState) => state.dashboardAside,)

  const dispatch = useDispatch()

  return (<div className={`${props?.className ?? ''} px-default py-[20px] flex items-center gap-[30px]`}>
    <div className={'flex items-center gap-[20px]'}>
      {/* Desktop */}
      <SystemButtonIcon
        className={'hidden md:block'}
        color={SystemButtonColor.white}
        onClick={() => dispatch(changeAsideDesktopStatus(!isOpenDesktop))}
      >
        <SvgMenu
          width={"24"}
          height={"24"}
        />
      </SystemButtonIcon>
      {/* Mobile */}
      <SystemButtonIcon
        className={'md:hidden'}
        color={SystemButtonColor.white}
        onClick={() => dispatch(changeAsideMobileStatus(!isOpenMobile))}
      >
        <SvgMenu
          width={"24"}
          height={"24"}
        />
      </SystemButtonIcon>
      <p className={'hidden md:block flex-1 m-0 font-[600] text-size-3 text-title leading-[1.3]'}>Good morning,
        James!</p>
    </div>

    {/* Actions */}
    <div className={'flex-1 flex justify-end gap-[15px]'}>
      <ActionAdd/>
      <ActionNotify/>
      <ActionProfile/>
    </div>
  </div>)
}


export const ActionAdd = () => {
  const itemsAdd: MenuProps['items'] = [
    {
      label: (<SystemLink url={ROUTERS.productDetail}>
        New product
      </SystemLink>), key: '0',
    }, {
      label: (<SystemLink url={ROUTERS.orderDetail}>
        New order
      </SystemLink>), key: '1',
    }, {
      label: (<SystemLink url={ROUTERS.postDetail}>
        New post
      </SystemLink>), key: '2',
    }, {
      label: (<SystemLink url={ROUTERS.userDetail}>
        New user
      </SystemLink>), key: '3',
    },
  ]

  return <Dropdown
    menu={{items: itemsAdd}}
    trigger={['click']}
  >
    <div>
      <SystemButtonIcon color={SystemButtonColor.white}>
        <SvgPlus
          width={"24"}
          height={"24"}
        />
      </SystemButtonIcon>
    </div>
  </Dropdown>
}

type ActionNotifyProps = {
  classname?: string
  children?: ReactNode
}
export const ActionNotify = (props: ActionNotifyProps) => {
  const {
          refPopup, changeShow, isShow
        } = UseEventClickOutside(false)

  const notifies: NotifyType[] = [
    {
      title: 'Your order is placed',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '2 min ago'
    }, {
      title: 'Meeting with designers',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '10 min ago'
    }, {
      title: 'UX 3 Task complete.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '20 min ago'
    }, {
      title: 'Dummy text of the printing.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '40 min ago'
    }, {
      title: 'Payment Successfull',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '1 hrs ago'
    }, {
      title: 'Your order is placed',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      time: '2 hrs ago'
    },
  ]

  const items: TabsProps['items'] = [
    {
      key: '1', label: 'All', children: <div>
        <div className={'max-h-[300px] overflow-x-hidden overflow-y-auto scrollbar pt-[10px] pb-[10px] '}>
          {notifies.map((item, index) => {
            return <SystemLink
              key={`notify-${index}`}
              className={'flex items-center gap-[15px] transition-all hover:bg-[rgb(var(--bg-opposite),0.04)] p-[14px_20px] cursor-pointer'}
            >
              <div className={'flex-1'}>
                <span className={'text-size-small line-clamp-2 mb-[2px]'}>{item.title}</span>
                <span className={'text-size-small-a text-sub line-clamp-1'}>{item.content}</span>
              </div>
              <div className={'text-size-small-a text-sub'}>{item.time}</div>
            </SystemLink>
          })}

        </div>
        <SystemLink
          className={'text-size-small  overflow-hidden text-center p-[14px_20px] cursor-pointer text-sub hover:text-primary transition-colors '}
        >View
          all</SystemLink>
      </div>,
    }, {
      key: '2', label: 'Projects', children: <div>
        <div className={'max-h-[300px] overflow-x-hidden overflow-y-auto scrollbar pt-[10px] pb-[10px]'}>
          {notifies.slice(0, 3).map((item, index) => {
            return <SystemLink
              key={`notify-${index}`}
              className={'flex items-center gap-[15px] transition-all hover:bg-[rgb(var(--bg-opposite),0.04)] p-[14px_20px] cursor-pointer'}
            >
              <div className={'flex-1'}>
                <span className={'text-size-small line-clamp-2 mb-[2px]'}>{item.title}</span>
                <span className={'text-size-small-a text-sub line-clamp-1'}>{item.content}</span>
              </div>
              <div className={'text-size-small-a text-sub'}>{item.time}</div>
            </SystemLink>
          })}

        </div>
      </div>
    }, {
      key: '3', label: 'Team', children: <div><Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/></div>,
    },
  ];

  return <div className={`${props?.classname ?? ''} relative`}>
    <SystemButtonIcon
      color={SystemButtonColor.white}
      onClick={() => changeShow(!isShow)}
    >
      <SvgNotification
        width={"24"}
        height={"24"}
      />
    </SystemButtonIcon>
    <div
      ref={refPopup as LegacyRef<HTMLDivElement>}
      className={`absolute top-full right-0 bg-bg rounded-radius-1 border border-solid border-border-low shadow-1 w-[300px] z-50 ${isShow ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <p className={'p-[20px_20px_20px] mb-0  font-[500]'}>Notifications</p>
      <Tabs
        defaultActiveKey="1"
        items={items}
      />
    </div>
  </div>
}

type ActionProfileProps = {
  classname?: string
  children?: ReactNode
}


export const ActionProfile = (props: ActionProfileProps) => {
  const {
          refPopup, changeShow, isShow
        } = UseEventClickOutside(true)

  const accountItems: ListTitleType[] = [
    {
      title: 'Profile', materialIconName: 'person'
    }, {
      title: 'Earning', materialIconName: 'account_balance_wallet'
    },
  ]

  const settingItems: ListTitleType[] = [
    {
      title: 'Account settings', materialIconName: 'settings'
    }, {
      title: 'Security', materialIconName: 'lock'
    }, {
      title: 'Help center', materialIconName: 'help'
    },
  ]

  return <div className={`${props?.classname ?? ''} relative z-50`}>
    <SystemButtonIcon
      color={SystemButtonColor.white}
      onClick={() => changeShow(!isShow)}
    >
      <SvgAccount
        width={"20"}
        height={"20"}
      />
    </SystemButtonIcon>
    <div
      ref={refPopup as RefObject<HTMLDivElement>}
      className={`absolute top-full right-0 bg-bg shadow-1 rounded-radius-1 border border-solid border-border-low w-[180px] pt-[3px] transition-all ${isShow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <span className={'text-size-small-a text-sub p-[10px_14px_3px_14px] block'}>Account</span>
      {accountItems.map((item, index) => {
        return <ListTitle
          title={item.title}
          materialIconName={item.materialIconName}
          key={`account-${index}`}
        />
      })}
      <span className={'text-size-small-a text-sub p-[10px_14px_3px_14px] block'}>Settings</span>
      {settingItems.map((item, index) => {
        return <ListTitle
          title={item.title}
          materialIconName={item.materialIconName}
          key={`account-${index}`}
        />
      })}
      <div className={'bg-border-low w-full h-[1px] mt-[10px]'}></div>
      <ListTitle
        title={'Logout'}
        materialIconName={'logout'}
        classname={'text-alert pt-[10px] pb-[10px]'}
      />
    </div>
  </div>
}