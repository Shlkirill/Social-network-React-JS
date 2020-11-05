import React, { Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import ProfileСontainer from './components/Profile/ProfileСontainer';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LeftMenuContainer from './components/LeftMenu/LeftMenu container';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeAppTC } from './redux/appReducer';
import { compose } from 'redux';
import Loading from './common/loading/loading';
import EditProfileContainer from './components/Profile/ProfileInfo/EditProfile/EditProfileContainer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    debugger;
    if (!this.props.initialize) {
      return <Loading />
    } else if (!this.props.isAuth) {
      return (
        <div>
          <Route path='/'><Redirect to={'/login'} /><LoginContainer /></Route>
        </div>
      )

    } else {
      return (
        <div className='SNsite'>
          <HeaderContainer />
          <LeftMenuContainer />
          <Switch>
            <Route exact path='/'><Redirect to={'/profile'} /></Route>
            <Route exact path='/login'><Redirect to={'/profile'} /></Route>
            <Route path='/profile/:userId?'><ProfileСontainer /></Route>
            <Route path='/messages'><Suspense><MessagesContainer /></Suspense></Route>
            <Route path='/news'><News /></Route>
            <Route path='/music'><Music /></Route>
            <Route path='/settings'><Settings /></Route>
            <Route path='/users'><Suspense><UsersContainer /></Suspense></Route>
            <Route path='/edit'><EditProfileContainer /></Route>
            <Route path='/*'><div>404 NOT FOUND</div></Route>
          </Switch>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    initialize: state.appInitial.initialized,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = {
  initializeApp: initializeAppTC,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))
  (App);
