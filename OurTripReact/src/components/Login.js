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
  }

    _handleFacebookLogin() {
    LoginManager.logInWithReadPermissions(['public_profile'])
    .then((result) => {
      if(result.isCancelled) {
        alert("Unable to sign in, Sign In Cancelled by user");
      } else {
        alert("Login success with permissions;" + result.grantedPermissions.toString())
        Actions.trips({accessToken: this.props.accessToken});
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
            <Button onPress={this.loginUser}>
              <Text>Log In</Text>
            </Button>
          </CardSection>
        </Card>

        <Button style= {styles.hasMargin} onPress={Actions.register}>
          <Text> Click here to register</Text>
        </Button>
        <Text style={styles.center}>Or</Text>

        <Button style={styles.facebookWrapper}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                    initUser(accessToken)
                  }
                )
              }
            }
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
  hasMargin: {
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: 'blue'
  },
  facebookWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
    backgroundColor: 'white'
  }
};

export default Login;
