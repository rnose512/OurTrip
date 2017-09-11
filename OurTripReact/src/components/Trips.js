import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TripList from './TripList';
import Dock from './common/Dock';

const Trips = () => {
    return (
      <View style={styles.container}>
        <TripList style={styles.trips}/>
        <Dock style={styles.dock}/>
      </View>
    );
  };

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
export default Trips;
