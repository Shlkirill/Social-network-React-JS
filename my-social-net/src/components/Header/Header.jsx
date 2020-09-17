import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className={styles.header}>
          <NavLink to='/profile'><img src='http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png' className={styles.logo}/></NavLink>
          <p>SOCIAL CITE</p>
          {props.isAuth !== false ? <button className={styles.button}>Exit</button> : <NavLink to={'/login'}><button className={styles.button}>Sign In</button></NavLink> }
      </div>
    )
  }

export default Header;