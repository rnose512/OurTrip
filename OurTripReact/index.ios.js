import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
// import Trips from './src/components/Trips';
import Header from './src/components/common/header';
import Router from './src/Router'
import App from './src/app';

class OurTrip extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Your Trips'}/>
        <Router />
      </View>
    );
  }
}

AppRegistry.registerComponent('OurTripReact', () => OurTrip)