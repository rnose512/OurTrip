import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class TripList extends Component {
  state = { trips: [] };

  componentWillMount() {
    console.log("ARE WE HITTING THE COMPONENET MOUNT?")
    axios.get('http://localhost:3000/trips')
    .then(response => this.setState({ trips: response.data }));
  }

  renderTrips() {
    return this.state.trips.map(trip =>
      <Text>{trip.name}</Text>
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