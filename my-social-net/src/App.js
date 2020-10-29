import React, { Suspense } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
import { lazyImport } from './components/hoc/lazyImport';
import EditProfile from './components/Profile/ProfileInfo/EditProfile/EditProfile';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (this.props.initialize) {
      return (
        <div className='SNsite'>
          <HeaderContainer />
          <LeftMenuContainer />
          <Route path='/profile/:userId?'><Suspense><ProfileСontainer /></Suspense></Route>
          <Route path='/messages'><Suspense><MessagesContainer /></Suspense></Route>
          <Route path='/news'><News /></Route>
          <Route path='/music'><Music /></Route>
          <Route path='/settings'><Settings /></Route>
          <Route path='/users'><Suspense><UsersContainer /></Suspense></Route>
          <Route path='/login'><LoginContainer /></Route>
          <Route path='/edit'><EditProfile /></Route>
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
  (App);
