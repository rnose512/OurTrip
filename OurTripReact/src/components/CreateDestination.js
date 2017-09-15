import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Alert, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
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
		var self = this
		axios.post('http://localhost:3000/trips/1/destinations', {
			name: name,
			start_date: start_date,
			end_date: end_date
		})
		.then(function (response) {
			Actions.TripShow({accessToken: self.props.accessToken});
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
    <ImageBackground source={require('../images/create-trip-background.jpg')} style={styles.container}>
      <View style= {styles.box}>
        <View style={styles.form}>
					<Input 
            style={styles.textForm}
						placeholder="where are you going?"
						placeholderTextColor='black'
	          returnKeyType="next"
	          autoCapitalize="none"
	          autoCorrect={false}
	          onChangeText={ name => this.setState({name})}
					/>
				</View>
        <View style={styles.form}>
          <TouchableOpacity onPress={this._showDateTimePicker} >
            <Text style={styles.text}>{this.state.start_date_format}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleStartDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={this.state.pickerMode}
          />
        </View>
        <View style={styles.form}>
          <TouchableOpacity onPress={this._showDateTimePicker} >
            <Text style={styles.text}>{this.state.end_date_format}</Text>
          </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleEndDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={this.state.pickerMode}
        />
        </View>
	      <Button style={styles.button} onPress= {this.setDestination}>
		      <Text style={styles.text}>Save Destination</Text>
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
})

export default CreateEvent;
