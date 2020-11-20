import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setCountUsersAC, getUsersTC, setCountUserTC, getActivePageTC, togglefollowUserTC } from '../../redux/usersReducer';
import { addFriendAC } from '../../redux/friendsReducer';
import { getFetching, getActivePage, getTotalUsersCount, getUsersPageSize, getFollowingInProgress, getUsersSuperCreateSelectorTEST } from '../../redux/users-selectors';
import { usersType } from '../../redux/usersReducer';
import { AppStateType } from '../../redux/reduxStore';


type PropsType = {
    users: Array<usersType>,
    pageSize: number,
    totalUsersCount: number,
    activePage: number,
    isFetching: boolean,
    isProgress: boolean,
    getUsers: (pageSize: number, activePage: number) => void,
    getActivePage: (pageSize: number, page: number) => void,
    setCountUser: (value: string, activePage: number) => void,
    setCountUsers: () => void,
    addFriend: () => void,
    togglefollowUser: () => void
}


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.activePage);
    }
    getActivePage = (page: number) => {
        this.props.getActivePage(this.props.pageSize, page);
    }
    setCountUsers = (value: string) => {
        console.log(value);
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

let mapStateToProps = (state: AppStateType) => {
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

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);