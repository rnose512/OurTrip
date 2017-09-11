import React, { Component } from 'react';
import Dock from './common/Dock';
import { View, Text, StyleSheet } from 'react-native';

class TripShow extends Component {
  // state = {
  //   attendees: []
  //   trip:
  // }

  // componentWillMount() {

  // }
  render() {
    return (
      <View>
        <Dock style={styles.dock} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  trip: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
})

export default TripShow;
