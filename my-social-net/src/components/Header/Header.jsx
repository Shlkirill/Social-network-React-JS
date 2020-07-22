import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
      <div className={styles.header}>
          <img src='http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png' className={styles.logo}/>
          <p>SOCIAL CITE</p>
          <button className={styles.button}>Выход</button>
      </div>
    )
  }
console.log(styles);
export default Header;