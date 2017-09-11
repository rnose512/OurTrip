import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

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
        {this.renderAttendees()}
      </View>
    );
  }

}

const styles = {
  container: {
     flex: 1,
     bottom: 0,  
     alignSelf: 'center', 
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  name: {
    flex: 0,
    width: 100,
    height: 50,
    color: '#2E4057',
    flexDirection: 'row',
  }
}

export default TripShow;