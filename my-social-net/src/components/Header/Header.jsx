import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className={styles.header}>
          <p></p>
          {props.isAuth ? <button onClick={props.logoutAccount} className={styles.button}><i class="fas fa-sign-out-alt"></i></button> : <NavLink to={'/login'}><button className={styles.button}>Sign In</button></NavLink> }
      </div>
    )
  }

export default Header;