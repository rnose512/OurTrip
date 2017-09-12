import React, { Component } from 'react';
import { View, StyleSheet, AlertIOS, TouchableOpacity } from 'react-native';
import Dock from './common/Dock';
import axios from 'axios';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';
import DateTimePicker from 'react-native-modal-datetime-picker'

class CreateTrip extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    console.log(this.props.accessToken)
    this.state = {
      name: '',
      start_date: '',
      end_date: '',
      creator_id: null,
      isDateTimePickerVisible: false,
      pickerMode: 'datetime'
    }

    this.newTrip = this.newTrip.bind(this)
    this.postTrip = this.postTrip.bind(this)
    this._showDateTimePicker = this._showDateTimePicker.bind(this)
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
    this._handleStartDatePicked = this._handleStartDatePicked.bind(this)
    this._handleEndDatePicked = this._handleEndDatePicked.bind(this)
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

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleStartDatePicked = (date) => {
    this.setState({start_time: date})
    this._hideDateTimePicker();
  };

  _handleEndDatePicked = (date) => {
    this.setState({end_time: date})
    this._hideDateTimePicker();
  };

  postTrip(){
    this.newTrip(this.state.name, this.state.start_date, this.state.end_date)
  }

  render() {
   return (
     <View style={styles.container}>
      <Card>
        <CardSection>
          <Input
            placeholder="Trip Name"
            placeholderTextColor='#949799'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ name => this.setState({name})}
            />
        </CardSection>
        <CardSection>
          <Item>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Text>Start date & time</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleStartDatePicked}
              onCancel={this._hideDateTimePicker}
              mode={this.state.pickerMode}
            />
          </Item>
        </CardSection>
        <CardSection>
          <Item>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Text>End date & time</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleEndDatePicked}
              onCancel={this._hideDateTimePicker}
              mode={this.state.pickerMode}
            />
          </Item>
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
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  dock: {
    flex: 1,
  }
};

export default CreateTrip;
