import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'hannie@email.com',
      password: 'password',
      logged_in: false,
      accessToken: null
    };

    this.authenticateUser = this.authenticateUser.bind(this)
  }


  authenticateUser(email, password) {
    fetch('http://localhost:3000/login?email=' + email + '&password=' + password)
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

  render() {
    return (
      <Card style={styles.viewStyle}>
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
          <Button onPress={this.authenticateUser}>
            <Text>Log In</Text>

          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  viewStyle: {
    paddingTop: 400
  },
  textStyle: {
    fontSize: 20
  }
};


export default Login;
