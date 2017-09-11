import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TripList from './TripList';
import Dock from './common/Dock';

export default class Trips extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.accessToken)
  }

  render(){
    return (
      <View style={styles.container}>
        <TripList style={styles.trips} accessToken={this.props.accessToken}/>
        <Dock style={styles.dock}/>
      </View>
    );
  };
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

