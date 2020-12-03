import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { accountLoginTC, FormDataType } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import Login from "./Login";

type PropsTypeLoginContainer = {
    isAuth: boolean,
    captcha: string | null,
    accountLogin: (formData: FormDataType) => void
}
type PropsTypeLogin = {
    isAuth: boolean,
    captcha: string | null,
}

const ContactForm = reduxForm<FormDataType, PropsTypeLogin>({
    form: 'login',
})(Login);


const LoginContainer: React.FC<PropsTypeLoginContainer> = ({ isAuth, captcha, accountLogin }) => {
    const onSubmit = (formData: FormDataType) => {
        accountLogin(formData);
    }
    return (
        <ContactForm onSubmit={onSubmit} captcha={captcha} isAuth={isAuth}/>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captchaUrl,
    }
}
let mapDispatchToProps = {
    accountLogin: accountLoginTC
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);