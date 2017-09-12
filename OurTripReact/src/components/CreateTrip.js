import React, { Component } from 'react';
import { View, StyleSheet, AlertIOS } from 'react-native';
import Dock from './common/Dock';
import axios from 'axios';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


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
    <Container style={styles.container}>
      <Item>
        <Input
            placeholder="Trip Name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ name => this.setState({name})}
          />
      </Item>

      <Item>
        <Input
            placeholder="Start Date"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(start_date) => this.setState({start_date})}
          />
      </Item>

      <Item>
        <Input
            placeholder= "End Date"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(end_date) => this.setState({end_date})}
          />
      </Item>

       <Button style={styles.hasmargin} onPress= {this.postTrip}>
         <Text style={styles.buttontext}>Create Trip</Text>
        </Button>

    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  trips: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
})

export default CreateTrip;
