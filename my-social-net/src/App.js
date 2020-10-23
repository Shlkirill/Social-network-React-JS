import React from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import LeftMenuContainer from './components/LeftMenu/LeftMenu container';
import UsersContainer from './components/Users/UsersContainer';
import ProfileСontainer from './components/Profile/ProfileСontainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeAppTC } from './redux/appReducer';

import { compose } from 'redux';
import Loading from './universalBlocks/loading/loading';

class SocialNetworkSite extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (this.props.initialize) {
      return (
        <div className='SNsite'>
          <HeaderContainer />
          <LeftMenuContainer />
          <Route path='/profile/:userId?'><ProfileСontainer /></Route>
          <Route path='/messages'><MessagesContainer /></Route>
          <Route path='/news'><News /></Route>
          <Route path='/music'><Music /></Route>
          <Route path='/settings'><Settings /></Route>
          <Route path='/users'><UsersContainer /></Route>
          <Route path='/login'><LoginContainer /></Route>
        </div>
      );
    } else {
      return <Loading />
    }
  }
}
const mapStateToProps = (state) => {
  return {
    initialize: state.appInitial.initialized
  }
}

const mapDispatchToProps = {
  initializeApp: initializeAppTC,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))
  (SocialNetworkSite);
