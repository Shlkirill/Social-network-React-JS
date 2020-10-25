import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setCountUsersAC, getUsersTC, setCountUserTC, getActivePageTC, togglefollowUserTC} from '../../redux/usersReducer';
import { addFriendAC } from '../../redux/friendsReducer';
import { getUsers, getFetching, getActivePage, getTotalUsersCount, getUsersPageSize, getFollowingInProgress, getUsersSuperCreateSelectorTEST } from '../../redux/users-selectors';

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
                togglefollowUser={this.props.togglefollowUser} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperCreateSelectorTEST(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        activePage: getActivePage(state),
        isFetching: getFetching(state),
        isProgress: getFollowingInProgress(state),
    }
}
let mapDispatchToProps = {
    setCountUsers: setCountUsersAC,
    addFriend: addFriendAC,
    getUsers: getUsersTC,
    getActivePage: getActivePageTC,
    setCountUser: setCountUserTC,
    togglefollowUser: togglefollowUserTC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);