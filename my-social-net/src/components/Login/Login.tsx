import React from 'react'
import { Field } from 'redux-form';
import styles from './Login.module.css'
import { inputField } from '../../common/forms/formsControls/formsControls';
import { minLength, maxLength, required, email } from '../../utils/validations/validation';
import { Redirect } from 'react-router-dom';

const minLength6 = minLength(6);
const maxLength30 = maxLength(30);

type PropsType = {
    isAuth: boolean,
    handleSubmit: () => void,
    error: string,
    captcha: string,
    pristine: boolean,
    submitting: boolean,
    invalid: boolean,
}

const Login:React.FC<PropsType> = ({isAuth, handleSubmit, error, captcha, pristine, submitting, invalid}) => {
    if (isAuth == false) {
        return (
            <div className={styles.container}>
                <div className={styles.containerLoginForm}>
                <p className={styles.tittle}>Login to social network</p>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <div>
                            <Field className={styles.inputField} name={"email"} component={inputField} type="text" placeholder="email"
                                validate={[required, email]} />
                        </div>
                        <div>
                            <Field className={styles.inputField} name="password" component={inputField} type="password" placeholder="password"
                                validate={[required, maxLength30, minLength6]} />

                        </div>
                        <div className={styles.rememberCheckbox}>
                            <Field name="remember" component={inputField} type="checkbox" /> <span> Remember me </span>
                        </div>
                        {error && <div className={styles.error}>
                            {error}
                        </div>}
                        {captcha &&
                            <div>
                                <div><img src={captcha} className={styles.captcha} alt="" /></div>
                                <div>
                                    <Field name="captcha" component={inputField} type="text" />
                                </div>
                            </div>}
                        <div className={styles.submitContainer}>
                            <button className={styles.submit} type="submit" disabled={pristine || submitting || invalid}>Login</button>
                        </div>
                    </form>
                </div> 
            </div>
        )
    } else {
        return <Redirect to={'/profile'} />
    }
}

export default Login