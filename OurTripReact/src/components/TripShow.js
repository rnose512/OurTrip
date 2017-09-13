import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Dock from './common/Dock';

class TripShow extends Component {
  state = {
    destinations: [] ,
    users: []
  };

  componentWillMount() {
    axios.get('http://localhost:3000/trips/1/destinations/1')
    .then(response => this.setState({ destinations: [response.data[0]], users: response.data[1] }))
    .catch(error => console.log(error))
  }

  renderUsers() {
    return this.state.users.map(user =>
      <Text>{user.first_name}</Text>
    )
  }

  renderDestinations() {
    return this.state.destinations.map(destination =>
      <Text>{destination.name}</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Destination:</Text>
        <View>
          {this.renderDestinations()}
        </View>
        <Text style={styles.header}>Attendees:</Text>
        <View >
          {this.renderUsers()}
        </View>
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
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  name: {
    width: 100,
    height: 50,
    color: '#2E4057',
    flexDirection: 'row',
  },
  dock: {
    flex: 1,
  }
}

export default TripShow;
