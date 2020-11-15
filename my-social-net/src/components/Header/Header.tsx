import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  logoutAccount: () => void
}

const Header: React.FC<PropsType> = ({logoutAccount}) => {
  console.log(logoutAccount)
    return (
      <div className={styles.header}>
          <p></p>
          <button onClick={logoutAccount} className={styles.button}><i className="fas fa-sign-out-alt"></i></button>
      </div>
    )
  }

export default Header;