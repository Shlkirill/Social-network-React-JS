import React from 'react';
import styles from './Users.module.css'
import User from './User/User';
import axios from 'axios';
import photoDefault from '../../img/empty-avatar.png'
import ReactPaginate from 'react-paginate';

class UsersClass extends React.Component {

    componentDidMount() {
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.activePage}`);

        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
        };
        serverRequest.then(handler);
    }
    getActivePage = (page) => {
        this.props.setPage(page);
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`);

        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
        };
        serverRequest.then(handler);
    }
    getMoreUsers = () => {
        this.props.setMoreUsers(this.props.pageSize);
        let serverRequest = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.activePage}`);

        let handler = (response) => {
            this.props.setUsers(response.data.items, response.data.totalCount);
        };
        serverRequest.then(handler);
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let arrPages = [];

        for (let i = 1; i <= pagesCount; i++) {
            arrPages.push(i);
        }
        let pagesList = arrPages.map((item) => {
            let activePage = this.props.avtivePage;
            return (
                <div>
                    <span className={item == activePage && styles.activePage} value={item} onClick={() => { this.getActivePage(item) }}>{item}</span>
                </div>
            )
        })
        let pagesList2 = () => {
            return (
                <div className={styles.commentBox}>
                    <ReactPaginate
                        previousLabel={<i class="fas fa-angle-double-left"></i>}
                        nextLabel={<i class="fas fa-angle-double-right"></i>}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pagesCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={(e) => { this.getActivePage(e.selected+1)} }
                        containerClassName={styles.pagination}
                        subContainerClassName={'pages pagination'}
                        activeClassName={styles.activePage}
                    />
                </div>
            )
        }
        let userDate = this.props.users.map((item) => {
            return (item.followed == true) ?
                <User name={item.name} key={item.id} id={item.id} followed='follow' avatar={item.photos.small || photoDefault} status={item.status} toogleFollow={this.props.toogleFollow} /> :
                <User name={item.name} key={item.id} id={item.id} followed='unfollow' avatar={item.photos.small || photoDefault} status={item.status} toogleFollow={this.props.toogleFollow} />
        });
        return (
            <div className={styles.users}>
                <h3 className={styles.tittle}>Users</h3>
                {pagesList2()}
                {userDate}
                <button onClick={() => {this.getMoreUsers()}} className={styles.button}><i className="fas fa-long-arrow-alt-down"></i>More users<i className="fas fa-long-arrow-alt-down"></i></button>
            </div>
        )
    }
}

export default UsersClass;