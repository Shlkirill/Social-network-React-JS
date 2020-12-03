import React from 'react'
import { WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form';
import styles from './formsControls.module.css';

type PropsType = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    type: string,
}

export const TextareaField: React.FC<PropsType> = ({ input, meta: { touched, error }, ...props }) => {
    console.log({ input, meta: { touched, error }, ...props })
    return (
        <div className={touched && error && styles.error}>
            <textarea {...input} {...props} />
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const inputField: React.FC<PropsType> = ({ input, type, meta: { touched, error }, ...props }) => {
    return (
        <div className={touched && error && styles.error}>
            <input {...input} type={type}{...props} />
            {touched && error && <span>{error}</span>}
        </div>
    )
}