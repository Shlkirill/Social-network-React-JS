import React from 'react'
import styles from './formsControls.module.css';

type MetaType = {
    touched: any,
    error: string,
}

type PropsType = {
    input: any,
    meta: MetaType,
    type: any
}

export const TextareaField: React.FC<PropsType> = ({input, meta: { touched, error}, ...props}) => {
    return (
        <div className={touched && error && styles.error}>
            <textarea {...input} {...props}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const inputField: React.FC<PropsType> = ({input, type, meta: { touched, error}, ...props}) => {
    return (
        <div className={touched && error && styles.error}>
            <input {...input} type = {type}{...props}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}