import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Navbar from '../navbar/index';
import * as util from '../../lib/util';
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';
import SettingsContainer from '../settings-container';
import {tokenSet} from '../../action/auth-actions';
import {profileFetchRequest} from '../../action/profile-actions'

class App extends React.Component {

  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <section>
            <Route path='*' component={Navbar} />
            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/settings' component={SettingsContainer} />
            <Route exact path='/dashboard' component={DashboardContainer} />
            <Route exact path='/' component={DashboardContainer} />
          </section>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
