import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className={styles.header}>
          <NavLink to='/profile'><img src='http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png' className={styles.logo}/></NavLink>
          <p>SOCIAL CITE</p>
          <button className={styles.button}>Выход</button>
      </div>
    )
  }

export default Header;