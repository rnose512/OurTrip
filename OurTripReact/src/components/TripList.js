import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import TripDetail from './TripDetail';

class TripList extends Component {
  constructor(props){
    super(props)
    console.log(this.props.accessToken)
    this.state = { trips: [] };
  }
  componentWillMount() {
    fetch('http://localhost:3000/trips?access_token=' + this.props.accessToken)
    .then((data) => data.json())
    .then((jsonData) => {
      console.log(jsonData)
     this.setState({ trips: jsonData });
    })
  }
  
  renderTrips() {
    {console.log(this.state.trips)}
    return this.state.trips.map(trip =>
      <TripDetail key={trip.title} trip={trip} />
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
export default TripList;