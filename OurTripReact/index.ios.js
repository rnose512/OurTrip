import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
// import Trips from './src/components/Trips';
import Header from './src/components/common/header';
import App from './src/app';
import RouterComponent from './src/Router'

class OurTrip extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Your Trips'}/>
        <RouterComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('OurTripReact', () => App)