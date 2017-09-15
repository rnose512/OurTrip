import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Alert, AlertIOS, ImageBackground } from 'react-native';
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
      startDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
			pickerMode: 'datetime'
		}
		this.createEvent = this.createEvent.bind(this)
		this.setEvent = this.setEvent.bind(this)
    this.showStartDateTimePicker = this.showStartDateTimePicker.bind(this)
    this.showEndDateTimePicker = this.showEndDateTimePicker.bind(this)
    this.hideStartDateTimePicker = this.hideStartDateTimePicker.bind(this)
    this.hideEndDateTimePicker = this.hideEndDateTimePicker.bind(this)
    this.handleStartDatePicked = this.handleStartDatePicked.bind(this)
    this.handleEndDatePicked = this.handleEndDatePicked.bind(this)
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
  
  handleStartDatePicked(date) {
    this.setState({start_time: date})
    this.setState({start_time_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this.hideStartDateTimePicker();
  };

  handleEndDatePicked(date) {
    this.setState({end_time: date})
    this.setState({end_time_format: (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()})
    this.hideEndDateTimePicker();
  };

	createEvent(title, category, description, start_time, end_time) {
		var self = this
		axios.post('http://localhost:3000/destinations/1/events', {
			title: title,
			category: category,
			description: description,
			start_time: start_time,
			end_time: end_time
		})
		.then(function (response) {
      console.log(self.props.accessToken)
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
   return (
    <ImageBackground source={require('../images/create-trip-background.jpg')} style={styles.container}>
      <View>
        <View style={styles.titleform}>
					<Input style={styles.textForm}
						placeholder="title"
						placeholderTextColor='#949799'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ title => this.setState({title})}
					/>
				</View>
				<View style={styles.form}>
					<Input style={styles.textForm}
						placeholder="category"
						placeholderTextColor='#949799'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ category => this.setState({category})}
					/>
				</View>
				<View style={styles.form}>
					<Input style={styles.textForm}
						placeholder="description"
						placeholderTextColor='#949799'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ description => this.setState({description})}
					/>
				</View>
        <TouchableOpacity onPress={this.showStartDateTimePicker} style={styles.date}>
          <Text style={styles.buttontext}>{this.state.start_time_format}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.startDateTimePickerVisible}
          onConfirm={this.handleStartDatePicked}
          onCancel={this.hideStartDateTimePicker}
          mode={this.state.pickerMode}
        />
        <TouchableOpacity onPress={this.showEndDateTimePicker} style={styles.date2}>
          <Text style={styles.buttontext}>{this.state.end_time_format}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.endDateTimePickerVisible}
          onConfirm={this.handleEndDatePicked}
          onCancel={this.hideEndDateTimePicker}
          mode={this.state.pickerMode}
        />
	      <Button style={styles.button} onPress= {this.setEvent}>
		      <Text style={styles.buttontext}>Save Event</Text>
	      </Button>
			</View>
		</ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
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
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textView: {
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: 'transparent'
  },
  textForm: {
    textAlign: 'center',
    color: 'black'
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  titleform:{
    flex: .8,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 65,
    backgroundColor: 'beige',
    opacity: .8,
  },
  form: {
    flex: .8,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: 'beige',
    opacity: .8,
  },
  date: {
    flex: .5,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: 'beige',
    opacity: .5
  },
  date2: {
    flex: .5,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'beige',
    opacity: .5
  },
  button: {
    flex: .3,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#BDBDBD',
    width: 350,
    paddingTop: 15,
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
    borderColor: 'white'
  },
  buttontext: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  dock: {
    flex: 1,
  }
})

export default CreateEvent;
