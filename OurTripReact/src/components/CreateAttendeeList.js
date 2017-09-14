import React, { Component } from 'react';
import { View, StyleSheet, Alert, AlertIOS } from 'react-native';
import { Container, Button, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class CreateEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_first_name: '',
			user_last_name: '',
			checkbox_chk: false
		}
	}

	componentWillMount() {
		axios.get('http://localhost:3000/user_trips')
			.then(response => 
				this.setState({ user_first_name: response.data.non_attending_users[0].first_name, user_last_name: response.data.non_attending_users[0].last_name }))
	}

	createAttendance() {
		var self = this
		axios.post('http://localhost:3000/user_trips')
		.then(function (response) {
			Actions.TripShow({accessToken: self.props.accessToken});
		})
		.catch(function (error) {
			console.log("this is an error");
			console.log(error);
		})
	}

	checkBox(){
		this.setState({checkbox_chk: true})
	}

	setAttendance(){
		this.createAttendance()
	}

  render() {
   return (
     <View style={styles.container}>
     	<Content>
     		<ListItem>
            <CheckBox checked={this.state.checkbox_chk} onPress={
            	this.checkBox.bind(this)

            } />
            <Body>
              <Text>{this.state.user_first_name} {this.state.user_last_name}</Text>
            </Body>
          </ListItem>
     	</Content>
      <Button style={styles.button} onPress= {this.setAttendance.bind(this)}>
	      <Text style={styles.buttontext}>Add Attendee</Text>
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
