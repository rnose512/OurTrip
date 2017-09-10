import React, { Component } from 'react';
import { View, Text, AlertIOS } from 'react-native';
import { Button, Spinner } from './components/common';
import { Scene, Router, Actions } from 'react-native-router-flux';
import RouterComponent from './Router'
import Login from './components/Login'
import TripShow from './components/TripShow.js';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import Register from './components/Register'


class App extends Component {
  constructor() {
      super()

      this.state = {
        accessToken: null,
        logged_in: false
      }

      this.authenticateUser = this.authenticateUser.bind(this)
      this.createUser = this.createUser.bind(this)
    }


  authenticateUser(email, password) {
    fetch('http://localhost:3000/login?email=' + email + '&password=' + password)
    .then(data => data.json())
    .then(jsonData => {
      if (jsonData.found) {
        AlertIOS.alert('Login Successful!')
        this.setState({logged_in: true})
        Actions.trips();

      } else {
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    })
    .catch((error) => {}) // currently not catching errors
  }

    createUser(first_name, last_name, email, password, phone_number, emergency_contact, emergency_contact_phone_number) {

      fetch('https://localhost:3000/register?first_name=' + first_name + '&last_name=' + last_name, + '&email=' + email, + '&password=' + password, + '&phone_number=' + phone_number, + '&emergency_contact=' + emergency_contact, + '&emergency_contact_phone_number=' + emergency_contact_phone_number,   {method: 'POST'})
      .then(data => data.json())
      .then(jsonData => {
        if (jsonData.saved) {
          AlertIOS.alert('Registration Successful!')
          this.setState({userId: jsonData.user.id})
          this.updateCurrentPage('IndexPage')
        } else {
          AlertIOS.alert(jsonData.errors.join("\n"))
        }
      })
      .catch((error) => {}) // currently not catching errors
    }

  render() {
    return (
      <Router sceneStyle={{paddingTop: 65}}>
          <Scene
            key="login"
            component={Login}
            title="Login"
            authenticateUser={this.authenticateUser}
          />
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
}

export default App;
