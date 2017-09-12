import React, { Component } from 'react';
import { StyleSheet, Alert, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class CreateEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: '',
			description: '',
			start_time: '',
			end_time: ''
		}
		this.createEvent = this.createEvent.bind(this)
		this.setEvent = this.setEvent.bind(this)
	}

	createEvent(title, category, description, start_time, end_time) {
		axios.post('http://localhost:3000/destinations/1/events', {
			title: title,
			category: category,
			description: description,
			start_time: start_time,
			end_time: end_time
		})
		.then(function (response) {
			AlertIOS.alert("You have created an event!");
			Actions.Itinerary();
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
		<Container style={styles.container}>
			<Item>
				<Input
					placeholder="title"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ title => this.setState({title})}
				/>
			</Item>
			<Item>
				<Input
					placeholder="category"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ category => this.setState({category})}
				/>
			</Item>
			<Item>
				<Input
					placeholder="description"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ description => this.setState({description})}
				/>
			</Item>
			<Item>
				<Input
					placeholder="start date & time"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ start_time => this.setState({start_time})}
				/>
			</Item>
			<Item>
				<Input
					placeholder="end date & time"
					placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={ end_time => this.setState({end_time})}
				/>
			</Item>
      <Button style={styles.hasmargin} onPress= {this.setEvent}>
	      <Text style={styles.buttontext}>Save Event</Text>
      </Button>
		</Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 3,
    margin: 10
  },
  hasmargin: {
		justifyContent: 'center',
		alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: '#68B0AB'
  },
  buttontext: {
    color: '#000000'
  },
  dock: {
    flex: 1,
  }
})

// createEvent(title, category, description, start_time, end_time) {
// 	fetch('http://localhost:3000/destinations/1/events?title='+title+'&category='+category+'&description='+description+'&start_time='+start_time+'&end_time='+end_time, {method: "POST"})
// 	.then(data => data.json())
// 	.then(jsonData => {
// 		if (jsonData.saved) {
// 			Actions.Itinerary();
// 		}
// 	})
// 	.catch(error => console.log(error))
// }
export default CreateEvent;
