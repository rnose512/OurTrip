import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
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
    axios('http://localhost:3000/trips/1/destinations')
    .then(response => {
      this.setState({
        destinations: response.data
      });
    })
    .catch(error => console.log(error))

    axios('http://localhost:3000/trips/1/destinations/1')
    .then(response => {
      this.setState({
        users: response.data[0]
      });
    })
    .catch(error => console.log(error))

  }

  renderUsers() {
    return this.state.users.map(user =>
      <Text key={user.id} style={styles.whiteText}>{user.first_name}</Text>
    )
  }

  renderDestinations() {
    return this.state.destinations.map(destination =>
      <Text key={destination.id} style={styles.whiteText}>{destination.name}</Text>
    )
  }

  renderDestinationForm() {
    Actions.CreateDestination({accessToken: this.props.accessToken});
  }

  render() {
    return (
      <ImageBackground source={require('../images/create-trip-background.jpg')} style={styles.container}>
        <ScrollView style={styles.trips}>
        <View style={styles.box}>
          <Text style={styles.header}>Destination:</Text>
          <Button onPress={this.renderDestinationForm.bind(this)} buttonTitle="Add Destinations" style={styles.buttonStyle} />
          <View>
            {this.renderDestinations()}
          </View>
        <View style={styles.box}>
          <Text style={styles.header}>Attendees:</Text>
          <Button onPress={Actions.CreateAttendeeList} buttonTitle="Add Attendees" style={styles.buttonStyle} />
          <View >
            {this.renderUsers()}
          </View>
        </View>
          <Dock style={styles.dock} accessToken={this.props.accessToken}/>
        </ScrollView>
      </ImageBackground>
    );
  }

}

const styles = {
  container: {
    position: 'absolute',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  trips: {
    marginTop: 70,
    opacity: .8
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
  },
  buttonStyle: {
    borderTopWidth: 4,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#2E4057',
    marginTop: 4,
    marginBottom: 4
  },
  box: {
    margin: 10,
    padding: 10,
    opacity: .8
  },
  whiteText: {
    color: '#FFF1C9'
  }
}

export default TripShow;
