import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';

class Login extends Component {
  constructor() {
    super();
    this.state = { email: '', password: ''};

    this.loginUser = this.loginUser.bind(this)
  }

  loginUser() {
    this.props.authenticateUser(this.state.email, this.state.password)
    console.log(this.state.email)
    
  }

  render() {
    return (
      <View >
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

        <Button style= {styles.hasmargin} onPress={Actions.register}>
          <Text> Register</Text>
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
    hasmargin: {
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: 'blue'
  },
};

export default Login;