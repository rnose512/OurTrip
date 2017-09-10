import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TripShow from './components/TripShow';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import Login from './components/Login'

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key='TripList' component={Trips} title='hello' />
        <Scene key='TripShow' component={TripShow} />
        <Scene key='Itinerary' component={Itinerary} />
      </Scene>
    </Router>
  );
};

        // <Scene key='Login' component={Login} initial />


export default RouterComponent;
