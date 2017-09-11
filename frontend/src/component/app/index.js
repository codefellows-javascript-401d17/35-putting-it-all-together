import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import NavBar from
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';

class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <section>


          </section>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
