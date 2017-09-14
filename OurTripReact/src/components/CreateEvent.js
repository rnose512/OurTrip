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
			title: '',
			category: '',
			description: '',
			start_time: '',
			end_time: '',
			start_time_format: 'Start date',
			end_time_format: 'End date',
			isDateTimePickerVisible: false,
			pickerMode: 'datetime'
		}
		this.createEvent = this.createEvent.bind(this)
		this.setEvent = this.setEvent.bind(this)
		this._showDateTimePicker = this._showDateTimePicker.bind(this)
		this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
		this._handleStartDatePicked = this._handleStartDatePicked.bind(this)
		this._handleEndDatePicked = this._handleEndDatePicked.bind(this)
	}

	_showDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: true })
	}

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleStartDatePicked = (date) => {
  	console.log("start date")
    this.setState({start_time: date})
    this.setState({start_time_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()  + " " + date.getHours().toString() + ":" + date.getMinutes().toString()})
    this._hideDateTimePicker();
  };

  _handleEndDatePicked = (date) => {
  	console.log("end date")
    this.setState({end_time: date})
    this.setState({end_time_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString() + " " + date.getHours().toString() + ":" + date.getMinutes().toString()})
    this._hideDateTimePicker();
  };

	createEvent(title, category, description, start_time, end_time) {
		console.log(title)
		console.log(start_time)
		console.log(end_time)
		var self = this
		axios.post('http://localhost:3000/destinations/1/events', {
			title: title,
			category: category,
			description: description,
			start_time: start_time,
			end_time: end_time
		})
		.then(function (response) {
			Actions.Itinerary({accessToken: self.props.accessToken});
		})
		.catch(function (error) {
			console.log("this is an error");
			console.log(error);
		})
	}

	setEvent(){
		this.createEvent(this.state.title, this.state.category, this.state.description, this.state.start_time, this.state.end_time)
	}

  render() {
    {console.log(this.props.accessToken)}
   return (
     <View style={styles.container}>
      <Card>
        <CardSection>
				<Input
					placeholder="title"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ title => this.setState({title})}
				/>
				</CardSection>


				<CardSection>
					<Input
						placeholder="category"
						placeholderTextColor='#949799'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ category => this.setState({category})}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="description"
						placeholderTextColor='#949799'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ description => this.setState({description})}
					/>
				</CardSection>
	      <CardSection>
	        <TouchableOpacity onPress={this._showDateTimePicker}>
	          <Text>{this.state.start_time_format}</Text>
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
	          <Text>{this.state.end_time_format}</Text>
	        </TouchableOpacity>
	        <DateTimePicker
	          isVisible={this.state.isDateTimePickerVisible}
	          onConfirm={this._handleEndDatePicked}
	          onCancel={this._hideDateTimePicker}
	          mode={this.state.pickerMode}
	        />
	      </CardSection>
      </Card>
      <Button style={styles.button} onPress= {this.setEvent}>
	      <Text style={styles.buttontext}>Save Event</Text>
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
