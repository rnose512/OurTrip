//MAIN PAGE

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Trips from './src/components/Trips';
import Header from './src/components/common/header';
import Router from './src/Router';


class OurTrip extends Component {
  render() {
    return (
      <View>
        <Router />
      </View>
    );
  }
}

// <Header headerText={'Poop'} />
AppRegistry.registerComponent('OurTripReact', () => OurTrip)
