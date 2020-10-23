import React from 'react'
import { Field } from 'redux-form';
import styles from './Login.module.css'
import { inputField } from '../../universalBlocks/forms/formsControls/formsControls';
import { minLength, maxLength, required, email } from '../../utils/validations/validation';
import { Redirect } from 'react-router-dom';

const minLength6 = minLength(6)
const maxLength30 = maxLength(30)

const Login = (props) => {
    if (props.isAuth == false) {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"email"} component={inputField} type="text" placeholder="email"
                        validate={[required, email]} />
                </div>
                <div>
                    <Field name="password" component={inputField} type="password" placeholder="password"
                        validate={[required, maxLength30, minLength6]} />

                </div>
                <div>
                    <Field name="remember" component={inputField} type="checkbox" /> Remember me
                </div>
                {props.error && <div className={styles.error}>
                    {props.error}
                </div>}
                <div>
                    <button type="submit" disabled={props.pristine || props.submitting || props.invalid}>Login</button>
                </div>
            </form>
        )
    } else {
        return <Redirect to={'/profile'} />
    }
}

export default Login