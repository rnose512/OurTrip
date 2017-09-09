import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import TripList from './src/components/TripList';

class OurTrip extends Component {
  render() {
    console.log("WTFFFF")
    return (
      <View>
        <TripList />
      </View>
    );
  }
}

AppRegistry.registerComponent('OurTripReact', () => OurTrip)