import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';


class Login extends Component {
  constructor() {
    super();
    this.state = { email: 'hannie@email.com', password: 'password'};

    this.loginUser = this.loginUser.bind(this)
  }

  loginUser() {
    this.props.authenticateUser(this.state.email, this.state.password)
  }

  render() {
    return (
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
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Login;