import React, { Component } from 'react';
import { Text, View,  AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged_in: false,
      accessToken: null
    }
    this.loginUser = this.loginUser.bind(this)
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
        Actions.Trips();
      } else {
        this.setState({logged_in: false})
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    }))
    .catch((error) => {}) // currently not catching errors
  }

  loginUser() {
    this.authenticateUser(this.state.email, this.state.password)
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
              autoCapitalize="none"
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
