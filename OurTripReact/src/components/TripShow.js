import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import Dock from './common/Dock';
import { Button } from 'native-base';
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
          <Button onPress={this.renderDestinationForm.bind(this)} style={styles.buttonStyle}>
              <Text style= {styles.text}> Add Destinations </Text>
          </Button>
          <View>
            {this.renderDestinations()}
          </View>
        </View> 
        <View style={styles.box}>
          <Text style={styles.header}>Attendees:</Text>
          <Button onPress={Actions.CreateAttendeeList} style={styles.buttonStyle}>
            <Text style= {styles.text}> Add Attendees </Text>
          </Button>
          <View center= {styles.center}>
            {this.renderUsers()}
          </View>
        </View>
        </ScrollView>
        <Dock style={styles.dock} accessToken={this.props.accessToken}/>
      </ImageBackground>
    );
  }

}

const styles = {
  container: {
    position: 'absolute',
    backgroundColor:'transparent',
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
  text:{
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 16,
  },
  trips: {
    marginTop: 70,
    opacity: .8,
  },
  dock: {
    flex: 1,
    position: 'fixed'
  },
  buttonStyle: {
    opacity: .7,
    width: 300,
    backgroundColor: '#fff',
    marginTop: 4,
    marginBottom: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  box: {
    margin: 10,
    padding: 10,
    opacity: .8, 
    justifyContent: 'center',
    alignSelf: 'center',
  },
  whiteText: {
    color: '#FFF1C9',
    textAlign: 'center'
  },
  center:{
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent:'center',
  }
}

export default TripShow;
