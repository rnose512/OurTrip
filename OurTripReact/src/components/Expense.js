import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'native-base'
import Dock from './common/Dock';
import CreateExpense from './CreateExpense';
import axios from 'axios';

class Expense extends Component {
  constructor(props){
    super(props);
    this.state = {
      trips: [],
      expenses: '',
      user_expenses: '',
      net: null }
  }

  componentWillMount() {
    var self = this;
    axios.get('http://localhost:3000/trips/1/expenses', {
    params:
      {access_token: self.props.accessToken}
    })
    .then(function(response) {
      self.setState({expenses: response.data.expenses})
      self.setState({trips: response.data.trips})
      self.setState({user_expenses: response.data.user_expenses})
    })
    .then(function(response) {
      self.setState({net: (self.state.expenses - self.state.user_expenses)})
    })
    .catch(function(response) {
      console.log(error)
    })
  }


  render(){
    return (
   
     <ImageBackground source={require('../images/expense2.jpg')} style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>What You Owe</Text>
          <Card style = {styles.card}>
            <Text style={styles.expense}>{this.state.user_expenses}</Text>
          </Card>
            <Text style={styles.header}>What You Are Owed</Text>
          <Card style = {styles.card}>
            <Text style={styles.expense}> {this.state.expenses}</Text>
          </Card>
            <Text style={styles.header}>Net Total</Text>
          <Card style = {styles.card}>
            <Text style={styles.expense}> {this.state.net}</Text>
          </Card>
        </View>
      </ScrollView>
      <Dock style={styles.dock} accessToken={this.props.accessToken}/>
    </ImageBackground>


    );
  }
}

const styles = {
  image: {
    position: 'absolute',
    backgroundColor:'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    margin: 50,
    padding: 10,
    opacity: .8
  },
  header: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
    color: 'white',
  },
  expense: {
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  card: {
    opacity: .6,
  },
  dock: {
    position: 'absolute',
    bottom: 0
  }
};

export default Expense;
