import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, View, Text } from 'react-native';
import Dock from './common/Dock';
import Button from './common/Button';
import { Actions } from 'react-native-router-flux';
import CreateDestination from './CreateDestination';
import CreateAttendeeList from './CreateAttendeeList';

class TripShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [] ,
      users: [],
      buttonTitle: ""
  };

  this.updateUsers = this.updateUsers.bind(this);
}

  updateUsers(newUsers) {
    this.setState({ users: this.state.users + newUsers })
  }

  componentWillMount() {
    console.log(this.props.accessToken)
    axios('http://localhost:3000/trips/1/destinations')
    .then(response => {
      this.setState({
        destinations: response.data
      });
      console.log(this.state.destinations)
    })
    .catch(error => console.log(error))

    axios('http://localhost:3000/trips/1/destinations/1')
    .then(response => {
      this.setState({
        users: response.data[0]
      });
      console.log(this.state.users[0])
    })
    .catch(error => console.log(error))

  }

  renderUsers() {
    return this.state.users.map(user =>
      <Text key={user.id}>{user.first_name}</Text>
    )
  }

  renderDestinations() {
    return this.state.destinations.map(destination =>
      <Text key={destination.id}>{destination.name}</Text>
    )
  }

  renderDestinationForm() {
    Actions.CreateDestination({accessToken: this.props.accessToken});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Destination:</Text>
        <Button onPress={this.renderDestinationForm.bind(this)} buttonTitle="Add Destinations" />
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
    position: 'fixed'
  }
}

export default TripShow;
