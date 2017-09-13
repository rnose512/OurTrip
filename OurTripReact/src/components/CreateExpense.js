import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Item, Input, Button } from 'native-base';
import Dock from './common/Dock';
import axios from 'axios';

class CreateExpense extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      total_amount: '',
      saved: false
    }

    this.createExpense = this.createExpense.bind(this)
    this.callCreateExpense = this.callCreateExpense.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:3000/trips?access_token=' + this.props.accessToken)
    .then((data) => data.json())
    .then((jsonData) => {
     this.setState({ trips: jsonData });
    })
  }

  createExpense(name, total_amount) {
    axios.post('http://localhost:3000/trips/1/expenses', {
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
  }

  callCreateExpense() {
    this.createExpense(this.state.name, this.state.total_amount)
  }

  render() {
    console.log(this.props.accessToken)
   return (
    <Container style={styles.container}>
      <Item>
        <Input
            placeholder="expense name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ name => this.setState({name})}
          />
      </Item>

      <Item>
        <Input
            placeholder="last name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(total_amount) => this.setState({total_amount})}
          />
      </Item>
      <Button style={styles.hasmargin} onPress= {this.callCreateExpense}>
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
  }
})

export default CreateExpense;
