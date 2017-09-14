import React, { Component } from 'react';
import { View,  AlertIOS, Image } from 'react-native';
import { Scene, Router, Actions, Route } from 'react-native-router-flux';
import TripShow from './components/TripShow';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import CreateEvent from './components/CreateEvent'
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Expense from './components/Expense';
import CreateTrip from './components/CreateTrip';
import CreateExpense from './components/CreateExpense';
import Dock from './components/common/Dock';
import CreateDestination from './components/CreateDestination';
import CreateAttendeeList from './components/CreateAttendeeList';


class OurTrip extends Component {
  constructor() {
    super();
    this.state = {
      accessToken: null
    }

    this.updateAccessToken = this.updateAccessToken.bind(this)
  }

  updateAccessToken(token) {
    this.setState({accessToken: token});
    console.log(this.state.accessToken)
  }

	render() {
  return (
    <Router sceneStyle={{paddingTop: 65}}  titleStyle={styles.navBarTitle}>
      <Scene
        hideNavBar={true}
        titleStyle={{color:'transparent', backgroundColor: 'transparent'}}
        style={styles.navBar}
        key="login"
        component={Login}
        title="Login"
        updateAccessToken={this.updateAccessToken}
        accessToken={this.state.accessToken}
      />
      <Scene
        hideNavBar={false}
        key="register"
        component={Register}
        title="Register"
      />

      <Scene
        hideNavBar={false}
        onRight={() => Actions.refresh({ accessToken: true})}
        hideNavBar={false}
        navigationBarStyle={{backgroundColor: 'transparent'}}
        rightTitle="New Trip"
        key="Trips"
        component={Trips}
        title="Your Trips"
      />
      <Scene
        navigationBarStyle={{backgroundColor: 'transparent'}}
        hideNavBar={false}
        key='CreateTrip'
        component={CreateTrip}
        title="Create New Trip"
      />
      <Scene hideNavBar={false} key='TripShow' component={TripShow} title="Trip Details"/>
      <Scene hideNavBar={false} key='CreateDestination' component={CreateDestination} title="Add Destinations"/>
      <Scene hideNavBar={false} key='CreateAttendeeList' component={CreateAttendeeList} title="Add Attendees"/>
      <Scene
        hideNavBar={false}
        onRight={() => Actions.CreateExpense({ accessToken: true })}
        rightTitle="New Expense"
        key='Expense'
        component={Expense}
        title="Expense"
      />
      <Scene
        hideNavBar={false}
        key='CreateExpense'
        component={CreateExpense}
        title="Add New Expense"/>
      <Scene
        hideNavBar={false}
        onRight={() => Actions.CreateEvent({ accessToken: this.state.accessToken })}      
        rightTitle="New Event"
        key='Itinerary'
        component={Itinerary}
        title="Itinerary"
        accessToken={this.state.accessToken}
        updateAccessToken={this.updateAccessToken}
        />
      <Scene 
        hideNavBar={false} 
        key='CreateEvent' 
        component={CreateEvent} 
        title="Create New Event"/>
    </Router>
    );
  }
}


const styles = {
  backgroundImage: {
    flex: 1,
  },
  container: {
   flexDirection: 'column',
  },
  navBar: {
    backgroundColor: 'transparent'
  },
  navBar: {
    backgroundColor:'#0D47A1',
  },
  navBarTitle:{
      color:'#2E4057'
  },
  barButtonTextStyle:{
      color:'#2E4057'
  },
  barButtonIconStyle:{
      tintColor:'rgb(255,255,255)'
  },
}

export default OurTrip;
