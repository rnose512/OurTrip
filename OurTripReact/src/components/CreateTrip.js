import React, { Component } from 'react';
import { View, StyleSheet, AlertIOS } from 'react-native';
import Dock from './common/Dock';
import axios from 'axios';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Spinner } from './common';

class CreateTrip extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    console.log(this.props.accessToken)
    this.state = {
      name: '',
      start_date: '',
      end_date: '',
      creator_id: null
    }

    this.newTrip = this.newTrip.bind(this)
    this.postTrip = this.postTrip.bind(this)
  }


  newTrip(name, start_date, end_date) {
    axios.post('http://localhost:3000/trips', {
      name: name,
      start_date: start_date,
      end_date: end_date,
      access_token: this.props.accessToken
    })
    .then(function (response) {
      console.log(response.data.access_token)
      console.log(response)
      AlertIOS.alert("You have created a trip!");
      Actions.Trips({accessToken: response.data.access_token});
    })
    .catch(function (error) {
      console.log("this is an error")
      console.log(this.props.accessToken)
      console.log(error);
    });
  }



  postTrip(){
    this.newTrip(this.state.name, this.state.start_date, this.state.end_date)
  }

  render() {
   return (
     <View style={styles.container}>
      <Card>
        <CardSection style={styles.card}>
          <Input style={styles.card}
            placeholder="Trip Name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ name => this.setState({name})}
            />
        </CardSection>

        <CardSection>
          <Input
              placeholder="Start Date"
              placeholderTextColor='#949799'
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(start_date) => this.setState({start_date})}
            />
        </CardSection>

        <CardSection>
          <Input
              placeholder= "End Date"
              placeholderTextColor='#949799'
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(end_date) => this.setState({end_date})}
            />
        </CardSection>
      </Card>

      <Button style={styles.button} onPress= {this.postTrip}>
         <Text style={styles.buttonText}>Create Trip</Text>
      </Button>
    </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    bottom: 0,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  card: {
    
  },
  button: {
    backgroundColor: '#68B0AB',
    width: 350,
    paddingTop: 15,
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
  dock: {
    flex: 1,
  }
};

export default CreateTrip;
