import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: 'Enter first name',
      last_name: 'Enter last name',
      email: 'Enter your email',
      password: 'Enter your password',
      phone_number: 'Enter phone number',
      emergecy_contact: 'Enter your emergecy contact',
      emergecy_contact_phone_number: 'Enter your emergency contact phone number',
    }

    this.registerUser = this.registerUser.bind(this)
    this.findUser = this.findUser.bind(this)
  }

  findUser(){
    axios.get("https://make-it-happen-api.herokuapp.com/api/verify", {
      params: {
        email: this.state.email
      }
    })
    .then((response)=> {
      if(response.data.found) {
          Alert.alert(
          'Email already exists',
          '',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}]
        )
      } else {
        this.registerUser()
      }
    })
    .catch(function (error) {

    });
  }

  registerUser(){
    this.props.createUser(this.state.first_name,this.state.last_name,this.state.email, this.state.password, this.state.phone_number, this.state.emergency_contact, this.state.emergency_contact_phone_number)
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
            onChangeText={(first_name) => this.setState({first_name})}
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
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({password})}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={this.loginUser}
        />
      </Item>
      <Item>
        <Input
          placeholder="phone number"
          placeholderTextColor='#949799'
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(phone_number) => this.setState({phone_number})}
        />
      </Item>
      <Item>
        <Input
          placeholder="Emergency contact"
          placeholderTextColor='#949799'
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact) => this.setState({emergency_contact})}
        />
      </Item>
      <Item>
        <Input
          placeholder="Emergency contact phone number"
          placeholderTextColor='#949799'
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emergency_contact_phone_number) => this.setState({emergency_contact_phone_number})}
        />
      </Item>
       <Button block info style={styles.hasmargin} onPress={this.findUser}>
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