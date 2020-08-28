import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (followed, id) => { dispatch(followActionCreator(followed, id)) },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;