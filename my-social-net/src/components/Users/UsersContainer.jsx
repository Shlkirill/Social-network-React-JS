import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toogleFollowAC, setUsersAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollow: (id, followed, target) => { dispatch(toogleFollowAC(id, followed, target)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;