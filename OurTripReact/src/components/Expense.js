import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dock from './common/Dock';
import CreateExpense from './CreateExpense';
import axios from 'axios';

class Expense extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      trips: [],
      expenses: '',
      user_expenses: '' }
  }

  componentWillMount() {
    var self = this;
    axios.get('http://localhost:3000/trips/5/expenses', {
    params:
      {access_token: self.props.accessToken}
    })
    .then(function(response) {
      console.log(response)
      self.setState({expenses: response.data.expenses})
      self.setState({trips: response.data.trips})
      self.setState({user_expenses: response.data.user_expenses})
    })
    .catch(function(response) {
      console.log(error)
    })
  }

  render(){
    console.log(this.state.expenses)
    return (
      <View style={styles.container}>
        <Text style={styles.expense}>{this.state.expenses}</Text>
        <Text style={styles.expense}>{this.state.user_expenses}</Text>
        <Dock style={styles.dock} accessToken={this.props.accessToken}/>
      </View>
    );
  }
}

const styles = {
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  expense: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
};

export default Expense;
