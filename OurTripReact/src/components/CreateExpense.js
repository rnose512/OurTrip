import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Item, Input, Button } from 'native-base';
import { Card, CardSection } from './common';
import { FormLabel, FormInput } from 'react-native-elements'
import Dock from './common/Dock';
import axios from 'axios';

class CreateExpense extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      total_amount: '',
      saved: false,
      attendees: [],
      value: 0
    }

    this.createExpense = this.createExpense.bind(this)
    this.callCreateExpense = this.callCreateExpense.bind(this)
  }

  componentWillMount() {
    var self = this
    fetch('http://localhost:3000/trips?access_token=' + this.props.accessToken)
    .then((data) => data.json())
    .then((jsonData) => {
     self.setState({ attendees: jsonData.attendees })
    })
    console.log('reached create expense')
  }

  createExpense(name, total_amount) {
    axios.post('http://localhost:3000/trips/5/expenses', {
      name: name,
      total_amount: total_amount,
      accessToken: this.props.accessToken
    })
    .then(function(response) {
      AlertIOS.alert("You have created an expense!")
      Actions.Expense();
    })
    .catch(function(error) {
      console.log(error)
    })

  axios.post('http://localhost:3000/trips/1/expenses', {
      accessToken: this.props.accessToken,
      user_id: 21,
      amount: this.state.value
    })
    .then(function(response) {
      AlertIOS.alert("You have created a user_expense!")
      Actions.Expense({accessToken: this.props.accessToken});
    })
    .catch(function(error) {
      console.log(error)
    })

    axios.post('http://localhost:3000/trips/1/expenses', {
      accessToken: this.props.accessToken,
      user_id: 22,
      amount: this.state.value
    })
    .then(function(response) {
      AlertIOS.alert("You have created a user_expense!")
      Actions.Expense({accessToken: this.props.accessToken});
    })
    .catch(function(error) {
      console.log(error)
    })

    axios.post('http://localhost:3000/trips/1/expenses', {
      accessToken: this.props.accessToken,
      user_id: 23,
      amount: this.state.value
    })
    .then(function(response) {
      AlertIOS.alert("You have created a user_expense!")
      Actions.Expense({accessToken: this.props.accessToken});
    })
    .catch(function(error) {
      console.log(error)
    })

    axios.post('http://localhost:3000/trips/1/expenses', {
      accessToken: this.props.accessToken,
      user_id: 24,
      amount: this.state.value
    })
    .then(function(response) {
      AlertIOS.alert("You have created a user_expense!")
      Actions.Expense({accessToken: this.props.accessToken});
    })
    .catch(function(error) {
      console.log(error)
    })

    axios.post('http://localhost:3000/trips/1/expenses', {
      accessToken: this.props.accessToken,
      user_id: 25,
      amount: this.state.value
    })
    .then(function(response) {
      AlertIOS.alert("You have created a user_expense!")
      Actions.Expense({accessToken: this.props.accessToken});
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  callCreateExpense() {
    this.createExpense(this.state.name, this.state.total_amount)
  }

  render() {
   return (
    <Container style={styles.container}>
      <FormLabel>Name</FormLabel>
        <FormInput
          placeholder="expense name"
          onChangeText={name => this.setState({ name })}/>
      <FormLabel>How much was it?</FormLabel>
        <FormInput
          placeholder="expense amount"
          onChangeText={total_amount => this.setState({ total_amount })}/>

      <FormLabel>Rio: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ value })}/>

      <FormLabel>Hawken: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ value })}/>

      <FormLabel>Hannie: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ value })}/>

      <FormLabel>Peter: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ value })}/>

      <FormLabel>Ashley: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ value })}/>
      <Button style={styles.hasmargin} onPress= {this.callCreateExpense()}>
        <Text style={styles.buttontext}>Add Expense</Text>
      </Button>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
  cardSection: {

  }
})

export default CreateExpense;
