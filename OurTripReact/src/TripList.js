import React, { Component } from 'react';
import axios from 'axios';

class TripList extends Component {
  state = { trips: [] };

  componentWillMount() {

    make http request
  }

  renderTrips() {
    return this.state.trips.map(trip =>
      //render trip display component
    );
  }

  render() {
    return (
      <View>
        {this.renderTrips()}
      </View>
    );

  }

}