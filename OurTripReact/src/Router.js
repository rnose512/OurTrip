import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import TripShow from './components/TripShow';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import Login from './components/Login'
import Register from './components/Register'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
        <Scene
          key="login"
          component={Login}
          title="Login"
        />
        <Scene
          key= "register"
          component= {Register}
          title="Register"
        />

        <Scene
          key="trips"
          component={Trips}
          title="Trips"
        />
        <Scene key='TripShow' component={TripShow} title="TripShow"/>
        <Scene key='Itinerary' component={Itinerary} title="Itinerary"/>
    </Router>
    );
  }

export default RouterComponent;
