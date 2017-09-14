import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import TripList from './TripList';
import Dock from './common/Dock';
import { Actions } from 'react-native-router-flux';

export default class Trips extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  componentWillReceiveProps (props) {
    if (props.accessToken) {
      Actions.CreateTrip({ accessToken: this.props.accessToken });
    }
  }

  render(){
    return (
      <ImageBackground source={require('../images/trips-background.jpg')} style={styles.container}>
        <View style={styles.container}>
          <TripList accessToken={this.props.accessToken}/>
        </View>
      </ImageBackground>
    );
  };
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    trips: {
      
    },
    dock: {
      flex: 1,
    }
  })

