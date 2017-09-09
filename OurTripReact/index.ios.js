import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Trips from './src/components/Trips';
import Header from './src/components/common/header';

class OurTrip extends Component {
  render() {
    console.log("WTFFFF")
    return (
      <View>
        <Header headerText={'Your Trips'}/>
        <Trips />
      </View>
    );
  }
}

AppRegistry.registerComponent('OurTripReact', () => OurTrip)