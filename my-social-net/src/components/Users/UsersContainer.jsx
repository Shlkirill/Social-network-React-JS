import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toogleFollowAC, setUsersAC, setPageAC, setCountUsersAC, toogleIfFetchingAC, followingInProgressAC, getUsersThunkCreator, getActivePageThunkCreator, setCountUserThunkCreator } from '../../redux/usersReducer';
import { addFriendAC } from '../../redux/friendsReducer';
import { apiGetUsers } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.activePage);
        //     this.props.toogleIsFetching(true);
        //     let handler = (response) => {
        //         this.props.setUsers(response.items, response.totalCount);
        //         this.props.toogleIsFetching(false);
        //     };
        //     apiGetUsers(this.props.pageSize, this.props.activePage).then(handler);
    }
    getActivePage = (page) => {
        this.props.getUsersThunk(this.props.pageSize, page);
        // this.props.setPage(page);
        // this.props.toogleIsFetching(true);
        // let handler = (response) => {
        //     this.props.setUsers(response.items, response.totalCount);
        //     this.props.toogleIsFetching(false);
        // };
        // apiGetUsers(this.props.pageSize, page).then(handler);
    }
    setCountUsers = (value) => {
        // this.props.getUsersThunk(value, this.props.activePage);
        this.props.setCountUserThunk(value, this.props.activePage)
        // this.props.setCountUsers(value);
        // this.props.toogleIsFetching(true);
        // let handler = (response) => {
        //     this.props.setUsers(response.items, response.totalCount);
        //     this.props.toogleIsFetching(false);
        // };
        // apiGetUsers(value, this.props.activePage).then(handler);
    }
    render() {
        return (
            <Users getActivePage={this.getActivePage}
                setCountUsers={this.setCountUsers}
                users={this.props.users}
                toogleFollow={this.props.toogleFollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                isFetching={this.props.isFetching}
                addFriend={this.props.addFriend}
                followingInProgress={this.props.followingInProgress}
                isProgress={this.props.isProgress} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users,
        pageSize: state.allUsers.pageSize,
        totalUsersCount: state.allUsers.totalUsersCount,
        avtivePage: state.allUsers.activePage,
        isFetching: state.allUsers.isFetching,
        isProgress: state.allUsers.followingInProgress,
    }
}
let mapDispatchToProps = {
    toogleFollow: toogleFollowAC,
    setUsers: setUsersAC,
    setPage: setPageAC,
    setCountUsers: setCountUsersAC,
    toogleIsFetching: toogleIfFetchingAC,
    addFriend: addFriendAC,
    followingInProgress: followingInProgressAC,
    getUsersThunk: getUsersThunkCreator,
    setCountUserThunk: setCountUserThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);