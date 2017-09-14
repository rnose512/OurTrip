import React, { Component } from 'react';
import { View, Text, StyleSheet, AlertIOS } from 'react-native';
import { Container, Item, Input, Button } from 'native-base';
import { Card, CardSection } from './common';
import { FormLabel, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
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
      expenseId: null,
      payerId: null,
      rio: { id: null, name: null, value: 0 },
      hawken: { id: null, name: null, value: 0 },
      ashley: { id: null, name: null, value: 0 },
      hannie: { id: null, name: null, value: 0 },
      peter: { id: null, name: null, value: 0 }
    }

    this.createExpense = this.createExpense.bind(this)
    this.callCreateExpense = this.callCreateExpense.bind(this)
  }

  componentWillMount() {
    var self = this
    axios.get("http://localhost:3000/trips", {
      params:
      { access_token: self.props.accessToken }
    })
    .then(function(response) {
      console.log(response)
      self.setState({ attendees: response.data.attendees })
    })
    .then(function(response) {
      self.setState({ hannie: {id: self.state.attendees[0].id, name: self.state.attendees[0].first_name} })
      self.setState({ hawken: {id: self.state.attendees[1].id, name: self.state.attendees[1].first_name} })
      self.setState({ peter: {id: self.state.attendees[2].id, name: self.state.attendees[2].first_name} })
      self.setState({ ashley: {id: self.state.attendees[3].id, name: self.state.attendees[3].first_name} })
      self.setState({ rio: {id: self.state.attendees[4].id, name: self.state.attendees[4].first_name} })
    })
    .catch(function(response) {
      console.log(error)
    })
  }

  createExpense(name, total_amount) {
    var self = this;
    console.log(this.state)
    axios.post('http://localhost:3000/trips/1/expenses', {
      name: name,
      total_amount: total_amount,
      access_token: self.props.accessToken
    })
    .then(function(response) {
      console.log(response)
        self.setState({expenseId: response.data.expense.id})
        self.setState({payerId: response.data.expense.payer_id})
    })
    .then(function(response) {
        axios.post('http://localhost:3000/user_expenses', {
        access_token: self.props.accessToken,
        user_id: self.state.rio.id, //HARD CODED. KEEP IN MIND FOR PRESENTATION.
        amount: self.state.rio.value,
        expense_id: self.state.expenseId
      })
      .then(function(response) {
        console.log(response)
          Actions.Expense({accessToken: self.props.accessToken});
        })
      .catch(function(error) {
          console.log(error)
        })
      axios.post('http://localhost:3000/user_expenses', {
        access_token: self.props.accessToken,
        user_id: self.state.hannie.id,
        amount: self.state.hannie.value,
        expense_id: response.data.expense.id
      })
      .then(function(response) {
        AlertIOS.alert("You have created a user_expense!")
        Actions.Expense({accessToken: self.props.accessToken});
      })
      .catch(function(error) {
        console.log(error)
      })

      axios.post('http://localhost:3000/user_expenses', {
        access_token: self.props.accessToken,
        user_id: self.state.hawken.id,
        amount: self.state.hawken.value,
        expense_id: response.data.expense.id
      })
      .then(function(response) {
        AlertIOS.alert("You have created a user_expense!")
        Actions.Expense({accessToken: self.props.accessToken});
      })
      .catch(function(error) {
        console.log(error)
      })

      axios.post('http://localhost:3000/user_expenses', {
        access_token: self.props.accessToken,
        user_id: self.state.peter.id,
        amount: self.state.peter.value,
        expense_id: response.data.expense.id
      })
      .then(function(response) {
        AlertIOS.alert("You have created a user_expense!")
        Actions.Expense({accessToken: self.props.accessToken});
      })
      .catch(function(error) {
        console.log(error)
      })

      axios.post('http://localhost:3000/user_expenses', {
        access_token: self.props.accessToken,
        user_id: self.state.ashley.id,
        amount: self.state.ashley.value,
        expense_id: response.data.expense.id
      })
      .then(function(response) {
        AlertIOS.alert("You have created a user_expense!")
        Actions.Expense({accessToken: self.props.accessToken});
      })
      .catch(function(error) {
        console.log(error)
      })
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
          onChangeText={value => this.setState({ rio: {value: parseInt(value)} })}/>

      <FormLabel>Hawken: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ hawken: {value: parseInt(value)} })}/>

      <FormLabel>Hannie: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ hannie: {value: parseInt(value)} })}/>

      <FormLabel>Peter: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ peter: {value: parseInt(value)} })}/>

      <FormLabel>Ashley: </FormLabel>
        <FormInput
          placeholder="$0"
          onChangeText={value => this.setState({ ashley: {value: parseInt(value)} })}/>
      <Button style={styles.button} onPress= {this.callCreateExpense}>
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
  button: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#BDBDBD',
    width: 350,
    paddingTop: 15,
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 30,
    borderColor: 'white'
  }
})

export default CreateExpense;
