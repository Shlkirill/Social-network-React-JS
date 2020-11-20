import React from 'react';
import styles from './ProfileInfo.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

type PropsType = {
    status: string,
    getUpdateSatus: (statusText: string) => void
    getUserStatus: (authId: number) => void,
    authId: number,
    userId: number,
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [statusText, setStatusText] = useState(props.status)

    let enableMode = () => {
        setEditMode(true);
    }

    let disableMode = () => {
        setEditMode(false);
        if (statusText !== props.status) {
            props.getUpdateSatus(statusText)
            props.getUserStatus(props.authId)
        };
    }
    let editStatusText = (e: any) => {
        e.target.value.match(/^[ ]+$/) || e.target.value == '' ? setStatusText(props.status) : setStatusText(e.target.value)
    }
    useEffect(() => {
        setStatusText(props.status);
    }, [props.status])
    return (
        <div>
            {props.userId == props.authId ? <div>{editMode == true ?
                <div className={styles.statusEditOn}>
                    <input onChange={editStatusText} placeholder="max-60 symbol" maxLength={60} autoFocus={true} type="text" onBlur={disableMode} />
                    <button onClick={disableMode}><i className="fas fa-arrow-circle-right"></i></button>
                </div> :
                <div className={styles.statusEditOff}>
                    <span onClick={enableMode}> {statusText || 'Статус пуст'}</span>
                </div>}
            </div> :
                <div className={styles.statusAllUsers}>
                    <span> {statusText || 'Статус пуст'}</span>
                </div>}
        </div>
    )
}

export default ProfileStatus