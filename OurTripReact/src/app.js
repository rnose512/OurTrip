import React, { Component } from 'react';
import { View, Text, AlertIOS } from 'react-native';
import { Button, Spinner } from './components/common';
import {
  Router,
  Scene,
  Actions,
  Modal
} from 'react-native-router-flux';
import Login from './components/Login';
import axios from 'axios';

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
    fetch('/login')
    // fetch('http://localhost:3000/users/login?email=' + email + '&password=' + password)
    .then(data => data.json())
    .then(jsonData => {
      if (jsonData.found) {
        AlertIOS.alert('Login Successful!')
        this.setState({logged_in: true})
        console.log(this.state.logged_in)
      } else {
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    })
    .catch((error) => {}) // currently not catching errors
  }

   //  createUser(first_name, last_name, email, password, phone_number, emergency_contact, emergency_contact_phone_number) {

   //    axios.post('https://localhost:3000/register', {
   //        first_name: first_name,
   //        last_name: last_name,
   //        email: email,
   //        password: password,
   //        phone_number: phone_number,
   //        emergency_contact: emergency_contact,
   //        emergency_contact_phone_number: emergency_contact_phone_number
   //    })
   //    .then((response) => {
   //      this.setState({
   //        accessToken: response.data.accessToken,
   //        logged_in: true
   //      });
   //      Actions.user({accessToken: this.state.accessToken});
   //    })
   //    .catch(function (error) {
   //      console.log(error.response);
   //    });
   // }

  render() {
    return (
      <View>
        <Login authenticateUser={this.authenticateUser} />
        <Text> {console.log(this)}{console.log(this.state.logged_in)} {console.log(this.state.accessToken)}</Text>
      </View>
    );
  }
}

export default App;