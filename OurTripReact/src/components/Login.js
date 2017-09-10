import React, { Component } from 'react';
import { Text, View, AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'hannie@email.com',
      password: 'password',
      logged_in: false
    }
    this.loginUser = this.loginUser.bind(this)
    this.authenticateUser = this.authenticateUser.bind(this)
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

  loginUser() {
    this.authenticateUser(this.state.email, this.state.password)
    console.log(this.state.email)
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}

            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            <Button onPress={this.loginUser}>
              <Text>Log In</Text>
            </Button>
          </CardSection>
        </Card>

        <Button style= {styles.hasMargin} onPress={Actions.register}>
          <Text> Click here to register</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  center: {
    alignSelf: 'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  hasMargin: {
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: 'blue'
  }
};

export default Login;
