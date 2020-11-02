import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { accountLoginTC } from '../../redux/authReducer';
import Login from "./Login";

const ContactForm = reduxForm({
    form: 'login',
})(Login);

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.accountLogin(formData);
    }
    return (
        <ContactForm onSubmit={onSubmit} isAuth={props.isAuth} captcha={props.captcha}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captchaUrl,
    }
}
let mapDispatchToProps = {
    accountLogin: accountLoginTC
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);