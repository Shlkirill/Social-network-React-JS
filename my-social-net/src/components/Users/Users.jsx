import React from 'react';
import styles from './Users.module.css'
import User from './User/User';
import photoDefault from '../../img/empty-avatar.png'
import ReactPaginate from 'react-paginate';
import Loading from '../../universalBlocks/loading/loading';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let arrPages = [];

    for (let i = 1; i <= pagesCount; i++) {
        arrPages.push(i);
    }
    let userDate = props.users.map((item) => {
        return <User name={item.name} key={item.id} id={item.id} followed={item.followed} 
        avatar={item.photos.small || photoDefault} status={item.status} addFriend={props.addFriend} 
        isProgress={props.isProgress} followUser={props.followUser} unFollowUser={props.unFollowUser}
        tooglefollowUser={props.tooglefollowUser}/>
    });
    return (
        <div className={styles.users}>
            <h3 className={styles.tittle}>Users</h3>
            <div className={styles.paginationContainer}>
                {props.isFetching ? <Loading /> : null}
                <div className={styles.commentBox}>
                    <ReactPaginate
                        previousLabel={<i className="fas fa-angle-double-left"></i>}
                        nextLabel={<i className="fas fa-angle-double-right"></i>}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pagesCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={(e) => { props.getActivePage(e.selected + 1) }}
                        containerClassName={styles.pagination}
                        subContainerClassName={'pages pagination'}
                        activeClassName={styles.activePage}
                    />
                </div>
                <div class="lds-hourglass"></div>
                <select className={styles.select} onChange={(e) => { props.setCountUsers(e.target.value) }}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select>
            </div>
            {userDate}
        </div>
    )
}

export default Users;