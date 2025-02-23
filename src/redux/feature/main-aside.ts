import {createSlice} from '@reduxjs/toolkit'

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

        changeAsideDesktopStatus: (
            state,
            {payload}: { payload: boolean },
        ) => {
            state.isOpenDesktop = payload
        },

        changeAsideMobileStatus: (
            state,
            {payload}: { payload: boolean },
        ) => {
            state.isOpenMobile = payload
        },
    },
})

export const {
    changeAsideDesktopStatus,
    changeAsideMobileStatus,
} = DashboardAside.actions

export default DashboardAside.reducer
