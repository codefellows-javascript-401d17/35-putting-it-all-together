import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import LandingContainer from '../landing-container';
import SettingsContainer from '../settings-container';
import {profileFetchRequest} from '../../action/profile-actions.js';

import * as util from '../../lib/util.js';
import {tokenSet} from '../../action/auth-actions.js';

class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if(token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <div className='cfgram'>
        <BrowserRouter>
          <div>
            <Route path='*' component={Navbar} />
            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/settings' component={SettingsContainer} />
            <Route exact path='/dashboard' component={DashboardContainer} />
            <Route exat path='/' component={DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
