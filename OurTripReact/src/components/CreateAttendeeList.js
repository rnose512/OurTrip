import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Alert, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection } from './common';
import DateTimePicker from 'react-native-modal-datetime-picker'

class CreateEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			start_date: '',
			end_date: '',
			start_date_format: 'Start date',
			end_date_format: 'End date',
			isDateTimePickerVisible: false,
			pickerMode: 'date'
		}
		this.createDestination = this.createDestination.bind(this)
		this.setDestination = this.setDestination.bind(this)
		this._showDateTimePicker = this._showDateTimePicker.bind(this)
		this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
		this._handleStartDatePicked = this._handleStartDatePicked.bind(this)
		this._handleEndDatePicked = this._handleEndDatePicked.bind(this)
	}

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleStartDatePicked = (date) => {
    this.setState({start_date: date})
    this.setState({start_date_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this._hideDateTimePicker();
  };

  _handleEndDatePicked = (date) => {
    this.setState({end_date: date})
    this.setState({end_date_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this._hideDateTimePicker();
  };

	createDestination(name, start_date, end_date) {
		axios.post('http://localhost:3000/trips/1/destinations', {
			name: name,
			start_date: start_date,
			end_date: end_date
		})
		.then(function (response) {
			AlertIOS.alert("You have created an destination!");
			Actions.TripShow({accessToken: this.props.accessToken});
		})
		.catch(function (error) {
			console.log("this is an error");
			console.log(error);
		})
	}

	setDestination(){
		this.createDestination(this.state.name, this.state.start_date, this.state.end_date)
	}

  render() {
   return (
     <View style={styles.container}>
      <Card>
        <CardSection>
				<Input
					placeholder="where are you going?"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ name => this.setState({name})}
				/>
				</CardSection>
	      <CardSection>
	        <TouchableOpacity onPress={this._showDateTimePicker}>
	          <Text>{this.state.start_date_format}</Text>
	        </TouchableOpacity>
	        <DateTimePicker
	          isVisible={this.state.isDateTimePickerVisible}
	          onConfirm={this._handleStartDatePicked}
	          onCancel={this._hideDateTimePicker}
	          mode={this.state.pickerMode}
	        />
	      </CardSection>
	      <CardSection>
	        <TouchableOpacity onPress={this._showDateTimePicker}>
	          <Text>{this.state.end_date_format}</Text>
	        </TouchableOpacity>
	        <DateTimePicker
	          isVisible={this.state.isDateTimePickerVisible}
	          onConfirm={this._handleEndDatePicked}
	          onCancel={this._hideDateTimePicker}
	          mode={this.state.pickerMode}
	        />
	      </CardSection>
      </Card>
      <Button style={styles.button} onPress= {this.setDestination}>
	      <Text style={styles.buttontext}>Save Destination</Text>
      </Button>
		</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
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
  buttontext: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  dock: {
    flex: 1,
  }
})

export default CreateEvent;
