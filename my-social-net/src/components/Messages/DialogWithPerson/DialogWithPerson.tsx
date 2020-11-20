import React from 'react';
import styles from './DialogWithPerson.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  id: number,
  img: string,
  name: string
}

const DialogWithPerson: React.FC<PropsType> = (props) => {
  return (
    <li>
      <NavLink activeClassName={styles.active} to={'/messages/' + props.id}>
        <div className={styles.person}>
          <img className={styles.avatar} src={props.img} alt="" />
          <span>{props.name}</span>
        </div>
      </NavLink>
    </li>
  )

}
export default DialogWithPerson;