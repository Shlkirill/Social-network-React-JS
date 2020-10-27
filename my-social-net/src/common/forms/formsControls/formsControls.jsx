import React from 'react'
import styles from './formsControls.module.css';

export const TextareaField = ({input, meta: { touched, error, warning }, ...props}) => {
    return (
        <div className={touched && error && styles.error}>
            <textarea {...input} {...props}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const inputField = ({input, type, meta: { touched, error, warning }, ...props}) => {
    return (
        <div className={touched && error && styles.error}>
            <input {...input} type = {type}{...props}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}