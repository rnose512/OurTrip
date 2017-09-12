import React, { Component } from 'react';
import { View,  AlertIOS} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
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


class OurTrip extends Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
      accessToken: null
    }
    this.authenticateUser = this.authenticateUser.bind(this)
  }

  authenticateUser(email, password) {
    fetch('http://localhost:3000/login?email=' + email + '&password=' + password, {method: "POST"})
    .then(data => data.json())
    .then((jsonData => {
      if (jsonData.found) {
        console.log(jsonData.accessToken)
        this.setState({ accessToken: jsonData.accessToken, logged_in: true });
        AlertIOS.alert('Login Successful!')
        Actions.Trips({accessToken: this.state.accessToken});
      } else {
        this.setState({logged_in: false})
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    }))
    .catch((error) => {console.log(error)}) // currently not catching errors
  }

  navigateUserToCreateTrip(){
    Actions.CreateTrip({accessToken: this.state.accessToken})
  }

	render() {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
        <Scene
          key="login"
          component={Login}
          title="Login"
          authenticateUser={this.authenticateUser}
          accessToken={this.state.accessToken}
        />
        <Scene
          key= "register"
          component={Register}
          title="Register"
        />

        <Scene onRight={() => Actions.refresh({ accessToken: true})}
          rightTitle="New Trip"
          key="Trips"
          component={Trips}
          title="Trips"
          accessToken={this.state.accessToken}

        />
        <Scene
          key='CreateTrip'
          component={CreateTrip}
          title="Create New Trip"
          accessToken={this.state.accessToken}
        />
        <Scene key='expenseCreate' component={CreateExpense} title="Add New Expense"/>
        <Scene key='TripShow' component={TripShow} title="TripShow"/>
        <Scene
          onRight={() => Actions.CreateEvent()}
          rightTitle="New Event"
          key='Itinerary'
          component={Itinerary}
          title="Itinerary"
          />
        <Scene key='CreateEvent' component={CreateEvent} title="Create New Event"/>
        <Scene key='Profile' component={Profile} title="Profile"/>
        <Scene key='Expense' component={Expense} title="Expense"/>
    </Router>
    );
  }
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
