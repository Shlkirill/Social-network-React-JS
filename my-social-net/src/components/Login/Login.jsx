import React from 'react'
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component="input" type="text" placeholder="email"/>
            </div>
            <div>
                <Field name="password" component="input" type="password" placeholder="password" />
            </div>
            <div>
                <Field name="remember" component="input" type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login