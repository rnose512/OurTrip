import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dock from './common/Dock';

class Expense extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.expense}>Expense page bitches</Text>
        <Dock style={styles.dock} />
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
