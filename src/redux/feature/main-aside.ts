import { createSlice } from '@reduxjs/toolkit'

type DashboardAsideType = {
  isOpenDesktop: boolean
  isOpenMobile: boolean
}

const initialState: DashboardAsideType = {
  isOpenDesktop: true,
  isOpenMobile: false,
}

export const DashboardAside = createSlice({
  name: 'dashboardAside',
  initialState,
  reducers: {
    changeDashBoardAsideDesktopStatus: (
      state,
      { payload }: { payload: boolean },
    ) => {
      state.isOpenDesktop = payload
    },
    changeDashBoardAsideMobileStatus: (
      state,
      { payload }: { payload: boolean },
    ) => {
      state.isOpenMobile = payload
    },
  },
})

export const {
  changeDashBoardAsideDesktopStatus,
  changeDashBoardAsideMobileStatus,
} = DashboardAside.actions

export default DashboardAside.reducer
