import React from 'react';
import axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { toogleFollowAC, setUsersAC, setPageAC, setCountUsersAC, toogleIfFetchingAC } from '../../redux/usersReducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.activePage}`);
        this.props.toogleIsFetching(true);
        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
            this.props.toogleIsFetching(false);
        };
        serverRequest.then(handler);
    }
    getActivePage = (page) => {
        this.props.setPage(page);
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`);
        this.props.toogleIsFetching(true);
        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
            this.props.toogleIsFetching(false);
        };
        serverRequest.then(handler);
    }
    setCountUsers = (value) => {
        this.props.setCountUsers(value);
        this.props.toogleIsFetching(true);
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${value}&page=${this.props.activePage}`);

        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
            this.props.toogleIsFetching(false);
        };
        serverRequest.then(handler);
    }
    render() {
        return (
            <Users getActivePage={this.getActivePage}
                setCountUsers={this.setCountUsers}
                users={this.props.users}
                toogleFollow={this.props.toogleFollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                isFetching={this.props.isFetching} />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.allUsers.users,
        pageSize: state.allUsers.pageSize,
        totalUsersCount: state.allUsers.totalUsersCount,
        avtivePage: state.allUsers.activePage,
        isFetching: state.allUsers.isFetching
    }
}
let mapDispatchToProps = {
    toogleFollow: toogleFollowAC,
    setUsers: setUsersAC,
    setPage: setPageAC,
    setCountUsers: setCountUsersAC,
    toogleIsFetching: toogleIfFetchingAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);