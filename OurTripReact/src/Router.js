import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TripShow from './components/TripShow.js';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import Login from './components/Login'
import Register from './components/Register'

const RouterComponent = () => {
  return (

    <Router sceneStyle={{paddingTop: 65}}>
        <Scene
          key= "register"
          component= {Register}
          title= "Register"
        />
        <Scene
          key="trips"
          component={Trips}
          title="Trips"
        />
        <Scene key='TripList' component={Trips} />
        <Scene key='TripShow' component={TripShow} />
        <Scene key='Itinerary' component={Itinerary} />
    </Router>
    );
  }


export default RouterComponent;