import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TripDetail from './TripDetail';
import Dock from './common/Dock'

class TripList extends Component {
  state = { trips: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/trips')
    .then(response => this.setState({ trips: response.data }));
    }

  renderTrips() {
    return this.state.trips.map(trip =>
      <TripDetail key={trip.id} trip={trip} />
      );
    }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        {this.renderTrips()}
        <Dock style={styles.dock} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,

   bottom: 0,
  },
  trips: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
})
export default TripList;
