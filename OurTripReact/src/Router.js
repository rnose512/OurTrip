import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TripShow from './components/TripShow.js';
import Trips from './components/Trips';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='TripList' component={Trips} />
      <Scene key='TripShow' component={TripShow} />
    </Router>
  );
};

export default RouterComponent;