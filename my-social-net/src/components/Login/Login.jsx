import React from 'react'
import { Field } from 'redux-form';
import { inputField } from '../../universalBlocks/forms/formsControls/formsControls';
import { minLength, maxLength, required, email } from '../../utils/validations/validation';

const minLength6 = minLength(6)
const maxLength30 = maxLength(30)

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component={inputField} type="text" placeholder="email" 
                validate={[required, email]}/>
            </div>
            <div>
                <Field name="password" component={inputField} type="password" placeholder="password"
                validate={[required, maxLength30, minLength6]} />
                
            </div>
            <div>
                <Field name="remember" component={inputField} type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login