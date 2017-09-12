import React, { Component } from 'react';
import { Text, View,  AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner } from './common';
import { Button, Input } from 'native-base';


const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

const {
  LoginButton,
  AccessToken
} = FBSDK;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.loginUser = this.loginUser.bind(this)
    this._handleFacebookLogin = this._handleFacebookLogin.bind(this)
  }

    _handleFacebookLogin() {
    LoginManager.logInWithReadPermissions(['public_profile'])
    .then((result) => {
      if(result.isCancelled) {
        alert("Unable to sign in, Sign In Cancelled by user");
      } else {
        alert("Login success with permissions;" + result.grantedPermissions.toString())
        console.log(this.props.accessToken)
        Actions.Trips({accessToken: this.props.accessToken});
      }
    })
  }

  loginUser() {
    this.props.authenticateUser(this.state.email, this.state.password)
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
            <Button style={styles.button1} onPress={this.loginUser}>
              <Text style={styles.buttonText}>Log In</Text>
            </Button>

            <Button style={styles.button2} onPress={Actions.register}>
              <Text style={styles.buttonText}>Click here to register</Text>
            </Button>
          </CardSection>
        </Card>

        <Text style={styles.center}>Or</Text>

        <Button style={styles.facebookWrapper}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            this._handleFacebookLogin
          }
          onLogoutFinished={() => alert("logout.")}/>
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
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#68B0AB',
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: '#68B0AB',
    flex: 1,
    flexDirection: 'row',
  },
  facebookWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
    backgroundColor: 'white'
  },
  buttonText: {
    textAlign: 'center',
  }
};

export default Login;
