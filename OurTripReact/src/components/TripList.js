import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import TripDetail from './TripDetail';

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
      <View>
        {this.renderTrips()}
      </View>
    );
  }
}
export default TripList;
