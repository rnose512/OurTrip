import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import TripShow from './components/TripShow';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Expense from './components/Expense';
import CreateTrip from './components/CreateTrip';


class OurTrip extends Component {
	render() {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
        <Scene
          key="login"
          component={Login}
          title="Login"
        />
        <Scene
          key= "register"
          component={Register}
          title="Register"
        />
        <Scene onRight={() => Actions.tripCreate()}
          rightTitle="New Trip"
          key="Trips"
          component={Trips}
          title="Trips"
        />
        <Scene key='tripCreate' component={CreateTrip} title="Create New Trip"/>
        <Scene key='TripShow' component={TripShow} title="TripShow"/>
        <Scene key='Itinerary' component={Itinerary} title="Itinerary"/>
        <Scene key='Profile' component={Profile} title="Profile"/>
        <Scene key='Expense' component={Expense} title="Expense"/>
    </Router>
    );
}

const styles = {
  container: {
   flex: 1,
   flexDirection: 'column',
  },
  routesStyle: {
    flex: 6
  }
}

export default OurTrip;