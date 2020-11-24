import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { accountLoginTC, FormDataType } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import Login from "./Login";


const ContactForm = reduxForm({
    form: 'login',
    //@ts-ignore
})(Login);

type PropsType = {
    isAuth: boolean,
    captcha: string,
    accountLogin: (formData:FormDataType) => void,
    onSubmit: (formData:FormDataType) => void
}

const LoginContainer: React.FC<PropsType> = ({ isAuth, captcha, accountLogin }) => {
    const onSubmit = (formData:FormDataType) => {
        accountLogin(formData);
    }
    return (
        //@ts-ignore
        <ContactForm onSubmit={onSubmit} captcha={captcha} isAuth={isAuth} />
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


//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);