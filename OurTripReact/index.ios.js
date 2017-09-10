//MAIN PAGE
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import RouterComponent from './src/Router';
import Dock from './src/components/common/Dock';

class OurTrip extends Component {
  render() {
    return (
      <View style={styles.container} >
        <RouterComponent style={styles.routes} />
        <Dock style={styles.dock} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
  },
  routes: {
    flex: 5,
  },
  dock: {
    flex: 2,
  }
})

AppRegistry.registerComponent('OurTripReact', () => OurTrip)
