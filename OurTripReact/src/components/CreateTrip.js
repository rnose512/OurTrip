import React, { Component } from 'react';
import { View, StyleSheet, AlertIOS, TouchableOpacity, ImageBackground } from 'react-native';
import Dock from './common/Dock';
import axios from 'axios';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';
import DateTimePicker from 'react-native-modal-datetime-picker'

class CreateTrip extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      start_date: '',
      end_date: '',
      start_date_format: 'Start date',
      end_date_format: 'End date',
      creator_id: null,
      startDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
      pickerMode: 'datetime'
    }

    this.newTrip = this.newTrip.bind(this)
    this.postTrip = this.postTrip.bind(this)
    this.showStartDateTimePicker = this.showStartDateTimePicker.bind(this)
    this.showEndDateTimePicker = this.showEndDateTimePicker.bind(this)
    this.hideStartDateTimePicker = this.hideStartDateTimePicker.bind(this)
    this.hideEndDateTimePicker = this.hideEndDateTimePicker.bind(this)
    this.handleStartDatePicked = this.handleStartDatePicked.bind(this)
    this.handleEndDatePicked = this.handleEndDatePicked.bind(this)
  }

  handleStartDatePicked(date) {
    this.setState({start_time: date})
    this.setState({start_date_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this.hideStartDateTimePicker();
  };

  handleEndDatePicked(date) {
    this.setState({end_time: date})
    this.setState({end_date_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this.hideEndDateTimePicker();
  };

  newTrip(name, start_date, end_date) {
    var self = this
    axios.post('http://localhost:3000/trips', {
      name: name,
      start_date: start_date,
      end_date: end_date,
      access_token: self.props.accessToken
    })
    .then(function (response) {
      AlertIOS.alert("You have created a trip!");
      Actions.Trips({accessToken: self.props.accessToken});
    })
    .catch(function (error) {
      console.log("this is an error")
      console.log(error);
    });
  }

  showStartDateTimePicker(){
    this.setState({ startDateTimePickerVisible: true });
  }

  showEndDateTimePicker(){
    this.setState({ endDateTimePickerVisible: true });
  }

  hideStartDateTimePicker(){
    this.setState({ startDateTimePickerVisible: false });
  }
  
  hideEndDateTimePicker(){
    this.setState({ endDateTimePickerVisible: false });
  }

  
  postTrip(){
    this.newTrip(this.state.name, this.state.start_date, this.state.end_date)
  }

  render() {
  return (
    <ImageBackground source={require('../images/create-trip-background.jpg')} style={styles.container}>
      <View style= {styles.box} >
        <View style={styles.form}>
          <Input style={styles.textForm}
            placeholder='Trip Name'
            placeholderTextColor='black'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ name => this.setState({name})}
          />
        </View>
        <View style={styles.form}>
          <TouchableOpacity onPress={this.showStartDateTimePicker} style={styles.date}>
            <Text style={styles.buttonText}>{this.state.start_date_format}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.startDateTimePickerVisible}
            onConfirm={this.handleStartDatePicked}
            onCancel={this.hideStartDateTimePicker}
            mode={this.state.pickerMode}
          />
        </View>
        <View style={styles.form}>
          <TouchableOpacity onPress={this.showEndDateTimePicker} style={styles.date2}>
            <Text style={styles.buttonText}>{this.state.end_date_format}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.endDateTimePickerVisible}
            onConfirm={this.handleEndDatePicked}
            onCancel={this.hideEndDateTimePicker}
            mode={this.state.pickerMode}
          />
        </View>
        <Button style={styles.button} onPress= {this.postTrip}>
          <Text style={styles.text}>Create Trip</Text>
        </Button>

      </View>
    </ImageBackground>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: {
    marginTop: 60,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textView: {
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  textForm: {
    textAlign: 'center',
  },
  form: {
    flex: .15,
    width: 270,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: 'white',
    opacity: .6,
    alignSelf: 'center',
  },
  button: {
    flex: .1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 180,
    paddingTop: 10,
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    marginBottom: 20,
    borderColor: 'white',
    opacity: .8,
  },
  text:{
    color: 'black',
    alignSelf: 'center',
    margin: 20,
  },
  dock: {
    flex: 1,
  }
}

export default CreateTrip;
