import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toogleFollowAC, setUsersAC, setPageAC, setMoreUsersAC } from '../../redux/usersReducer';
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users,
        pageSize: state.allUsers.pageSize,
        totalUsersCount: state.allUsers.totalUsersCount,
        avtivePage: state.allUsers.activePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollow: (id, followed) => { dispatch(toogleFollowAC(id, followed)) },
        setUsers: (users,totalCount) => { dispatch(setUsersAC(users,totalCount)) },
        setPage: (clickPage) => {dispatch(setPageAC(clickPage))},
        setMoreUsers: (oldPageSize) => {dispatch(setMoreUsersAC(oldPageSize))},
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);


export default UsersContainer;