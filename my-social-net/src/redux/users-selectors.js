import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.allUsers.users
}
export const getUsersSuperCreateSelectorTEST = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getUsersPageSize = (state) => {
    return state.allUsers.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.allUsers.totalUsersCount
}
export const getActivePage = (state) => {
    return state.allUsers.activePage
}
export const getFetching = (state) => {
    return state.allUsers.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.allUsers.followingInProgress
}