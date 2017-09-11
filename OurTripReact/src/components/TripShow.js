import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Dock from './common/Dock'

class TripShow extends Component {
  state = { 
    destinations: [] ,
    attendees: []
  };

  componentWillMount() {
    axios.get('http://localhost:3000/trips/1/destinations/1')
    .then(response => this.setState({ destinations: [response.data[0]], attendees: response.data[1] }));
  }

  renderAttendees() {
    return this.state.attendees.map(attendee =>
      <Text style={styles.name}>{attendee.first_name}</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Destination:</Text>
        <Text style={styles.header}>Attendees:</Text>
        <Text style={styles.header}>{this.renderAttendees()}</Text>
        <Dock style={styles.dock} />
      </View>
    );
  }

}

const styles = {
  container: {
     flex: 1,
     bottom: 0,  
  },
  header: {
    alignSelf: 'center', 
    fontWeight: 'bold',
    fontSize: 20,
  },
  dock: {
    flex: 1,
  }
}

export default TripShow;