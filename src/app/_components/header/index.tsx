import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'antd'
import { RootState } from '@/redux/store'
import { changeDashBoardAsideDesktopStatus } from '@/redux/feature/main-aside'

type HeaderProps = { className?: string }
export const Header = (props: HeaderProps) => {
  const { isOpenDesktop, isOpenMobile } = useSelector(
    (state: RootState) => state.dashboardAside,
  )

  const dispatch = useDispatch()

  return (
    <div className={`${props?.className ?? ''}`}>
      header{' '}
      <Button
        onClick={() =>
          dispatch(changeDashBoardAsideDesktopStatus(!isOpenDesktop))
        }
      >
        Toogle aside destop
      </Button>{' '}
      <Button
        onClick={() =>
          dispatch(changeDashBoardAsideDesktopStatus(!isOpenMobile))
        }
      >
        Toogle aside mobile
      </Button>
    </div>
  )
}
