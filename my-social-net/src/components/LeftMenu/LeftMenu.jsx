import React from 'react';
import styles from './LeftMenu.module.css'

function LeftMenu() {
  return (
    <ul className={styles.menu}>
      <li><a href='#'>Profile</a></li>
      <li><a href='#'>Messages</a></li>
      <li><a href='#'>News</a></li>
      <li><a href='#'>Music</a></li>
      <li><a href='#'>Settings</a></li>
    </ul>
  )
}
export default LeftMenu;