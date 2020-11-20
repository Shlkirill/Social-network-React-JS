import { createSelector } from "reselect"
import { AppStateType } from "./reduxStore"

export const getUsers = (state: AppStateType) => {
    return state.allUsers.users
}
export const getUsersSuperCreateSelectorTEST = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getUsersPageSize = (state: AppStateType) => {
    return state.allUsers.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.allUsers.totalUsersCount
}
export const getActivePage = (state: AppStateType) => {
    return state.allUsers.activePage
}
export const getFetching = (state: AppStateType) => {
    return state.allUsers.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.allUsers.followingInProgress
}