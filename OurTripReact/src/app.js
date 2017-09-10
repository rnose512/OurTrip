import React, { Component } from 'react';
import { View, Text, AlertIOS } from 'react-native';
import { Button, Spinner } from './components/common';
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import Login from './components/Login';
import Register from './components/Register';
import Trips from './components/Trips';

class App extends Component {
  constructor() {
      super()

      this.state = {
        accessToken: null,
        logged_in: false
      }

      this.authenticateUser = this.authenticateUser.bind(this)
      // this.createUser = this.createUser.bind(this)
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

      axios.post('https://localhost:3000/register', {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          phone_number: phone_number,
          emergency_contact: emergency_contact,
          emergency_contact_phone_number: emergency_contact_phone_number
      })
      .then((response) => {
        this.setState({
          accessToken: response.data.accessToken,
          logged_in: true
        });
        Actions.user({accessToken: this.state.accessToken});
      })
      .catch(function (error) {
        console.log(error.response);
      });
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
            key="trips"
            component={Trips}
            title="Trips"
          />
          <Scene
            key="register"
            component={Register}
            title="Register"
          />
    </Router>
    );
  }
}

export default App;
