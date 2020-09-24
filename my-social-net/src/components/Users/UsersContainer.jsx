import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setCountUsersAC, getUsersTC, setCountUserTC, getActivePageTC, followUserTC, unFollowUserTC} from '../../redux/usersReducer';
import { addFriendAC } from '../../redux/friendsReducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.activePage);
    }
    getActivePage = (page) => {
        this.props.getActivePage(this.props.pageSize, page);
    }
    setCountUsers = (value) => {
        this.props.setCountUser(value, this.props.activePage);

    }
    render() {
        return (
            <Users getActivePage={this.getActivePage}
                setCountUsers={this.setCountUsers}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                isFetching={this.props.isFetching}
                addFriend={this.props.addFriend}
                isProgress={this.props.isProgress}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users,
        pageSize: state.allUsers.pageSize,
        totalUsersCount: state.allUsers.totalUsersCount,
        activePage: state.allUsers.activePage,
        isFetching: state.allUsers.isFetching,
        isProgress: state.allUsers.followingInProgress,
    }
}
let mapDispatchToProps = {
    setCountUsers: setCountUsersAC,
    addFriend: addFriendAC,
    getUsers: getUsersTC,
    getActivePage: getActivePageTC,
    setCountUser: setCountUserTC,
    followUser: followUserTC,
    unFollowUser: unFollowUserTC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);