import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TripDetail from './TripDetail';
import Dock from './common/Dock'

class TripList extends Component {
  constructor(props){
    super(props)
    this.state = { trips: [] };
  }
  componentWillMount() {
    fetch('http://localhost:3000/trips?access_token=' + this.props.accessToken)
    .then((data) => data.json())
    .then((jsonData) => {
     this.setState({ trips: jsonData.trips });
    })
  }

  renderTrips() {
    {console.log(this.state.trips)}
    return this.state.trips.map(trip =>
      <TripDetail key={trip.id} trip={trip} />
      );
    }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTrips()}
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
  }
})
export default TripList;
