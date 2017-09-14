import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Dock from './common/Dock';
import Button from './common/Button';
import { Actions } from 'react-native-router-flux';
import CreateDestination from './CreateDestination';
import CreateAttendeeList from './CreateAttendeeList';

class TripShow extends Component {
  constructor() {
    super();
    this.state = {
      destinations: [] ,
      users: [],
      buttonTitle: ""
  };
}

  componentWillMount() {
    axios.get('http://localhost:3000/trips/1/destinations')
    .then(response => this.setState({ destinations: [response.data]}))
    .catch(error => console.log(error))

    axios.get('http://localhost:3000/trips/1/destinations/1')
    .then(response => this.setState({users: [response.data]}))
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

  renderDestinationForm() {
    Actions.CreateDestination();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Destination:</Text>
        <Button onPress={Actions.CreateDestination} buttonTitle="Add Destinations" />
        <View>
          {this.renderDestinations()}
        </View>
        <Text style={styles.header}>Attendees:</Text>
        <Button onPress={Actions.CreateAttendeeList} buttonTitle="Add Attendees" />
        <View >
          {this.renderUsers()}
        </View>
        <Dock style={styles.dock} accessToken={this.props.accessToken}/>
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
