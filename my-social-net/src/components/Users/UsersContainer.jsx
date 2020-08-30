import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toogleFollowAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollow: (id,followed) => { dispatch(toogleFollowAC(id,followed)) },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;