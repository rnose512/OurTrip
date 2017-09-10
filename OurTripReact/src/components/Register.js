import React, { Component } from 'react';
import { StyleSheet, Alert, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

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
        Action.trips();
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
    <Container style={styles.container}>
      <Item>
        <Input
            placeholder="first name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ first_name => this.setState({first_name})}
          />
      </Item>

      <Item>
        <Input
            placeholder="last name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(last_name) => this.setState({last_name})}
          />
      </Item>
      <Item>
        <Input
            placeholder="email"
            placeholderTextColor='#949799'
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
          />
      </Item>
      <Item>
        <Input
          placeholder="password"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({password})}
        />
      </Item>
      <Item>
        <Input
          placeholder="phone number"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(phone_number) => this.setState({phone_number})}
        />
      </Item>
      <Item>
        <Input
          placeholder="Emergency contact"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact) => this.setState({emergency_contact})}
        />
      </Item>
      <Item>
        <Input
          placeholder="Emergency contact phone number"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact_phone_number) => this.setState({emergency_contact_phone_number})}
        />
      </Item>
       <Button style={styles.hasmargin} onPress= {this.registerUser}>
         <Text style={styles.buttontext}>REGISTER</Text>
        </Button>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 3,
    margin: 10
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: 'blue'
  },
  buttontext: {
    color: '#000000'
  }

});
