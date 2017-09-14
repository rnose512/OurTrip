import React, { Component } from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
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
        <ScrollView style={styles.trips}>
          <TripList accessToken={this.props.accessToken}/>
        </ScrollView>
      </ImageBackground>
    );
  };
}

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    trips: {
      marginTop: 70,
      opacity: .8
    },
    dock: {
      flex: 1,
    }
  })
