import React, { Component } from 'react';
import { StyleSheet, Alert, AlertIOS, ImageBackground } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput } from 'react-native-elements';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: '',
      emergency_contact: '',
      emergency_contact_phone_number: '',
      registered: false,
      accessToken: null
    }

    this.createUser = this.createUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
  }

  createUser(first_name, last_name, email, password, phone_number, emergency_contact, emergency_contact_phone_number) {

    fetch('http://localhost:3000/register?first_name=' + first_name + '&last_name=' + last_name + '&email=' + email + '&password=' + password + '&phone_number=' + phone_number + '&emergency_contact=' + emergency_contact + '&emergency_contact_phone_number=' + emergency_contact_phone_number, {method: "POST" })
    .then(data => data.json())
    .then(jsonData => {
      if (jsonData.saved) {
        this.setState({ accessToken: jsonData.accessToken, registered: true });
        AlertIOS.alert('Registration Successful!')

        Actions.Trips({accessToken: this.state.accessToken});
      } else {
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    })
    .catch((error) => {}) // currently not catching errors
  }

  registerUser(){
    this.createUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.phone_number, this.state.emergency_contact, this.state.emergency_contact_phone_number)
  }

  render() {
  return (
    <ImageBackground source={require('../images/login-background.jpg')} style={styles.image}>
    <Container style={styles.container}>
        <FormInput
            inputStyle= {styles.color}
            placeholder="first name"
            placeholderTextColor='white'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ first_name => this.setState({first_name})}
          />

        <FormInput
            inputStyle= {styles.color}
            placeholder="last name"
            placeholderTextColor='white'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(last_name) => this.setState({last_name})}
          />
        <FormInput
            inputStyle = {styles.color}
            placeholder="email"
            placeholderTextColor='white'
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
          />
        <FormInput
          inputStyle = {styles.color}
          placeholder="password"
          placeholderTextColor='white'
          returnKeyType="next"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({password})}
        />
        <FormInput
          inputStyle = {styles.color}
          placeholder="phone number"
          placeholderTextColor='white'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(phone_number) => this.setState({phone_number})}
        />

        <FormInput
          inputStyle = {styles.color}
          placeholder="Emergency contact"
          placeholderTextColor='white'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact) => this.setState({emergency_contact})}
        />
        <FormInput
          inputStyle = {styles.color}
          placeholder="Emergency contact phone number"
          placeholderTextColor='white'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact_phone_number) => this.setState({emergency_contact_phone_number})}
        />
       <Button style={styles.button} onPress= {this.registerUser}>
         <Text style={styles.buttontext}>REGISTER</Text>
        </Button>
    </Container>
    </ImageBackground>
  );
}
}
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    backgroundColor:'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
   marginTop: 10,
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  trips: {
    flex: 4,
  },
  dock: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#D3D3D3",
    width: 350,
    paddingTop: 10,
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 40,
    borderColor: 'white',
    opacity: .8
  },
  color:{
    color: 'white',
  }
})
