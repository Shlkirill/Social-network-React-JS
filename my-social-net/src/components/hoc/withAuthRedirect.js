import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export const withAuthRedirectComponent = (Component) => {

    const RedidectComponent = (props) => {
        debugger;
        if (props.isAuth === false) return <Redirect to={'/login'} />

        return (
            <Component {...props} />
        )
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let connectedRedirectComponent = connect(mapStateToProps)(RedidectComponent);

    return connectedRedirectComponent;
}