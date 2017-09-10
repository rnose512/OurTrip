//MAIN PAGE
import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import RouterComponent from './src/Router'

class OurTrip extends Component {
  render() {
    return (
      <View>
        <RouterComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('OurTripReact', () => OurTrip)
