import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dock from './common/Dock';

class CreateTrip extends Component {
  render() {

   return (
      <View style={styles.container}>
        <Text >HELLO NEW TRIP</Text>
        <Dock style={styles.dock} />
      </View>
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

export default CreateTrip;
