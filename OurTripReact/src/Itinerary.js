import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Calendar from './Calendar'
import axios from 'axios'

class Itinerary extends Component {
	state = {
		events: []
	}

	componentWillMount() {
		axios.get('http://localhost:3000/destinations/1/events')
			.then(response => this.setState({ events: response.data }))
	}

	render(){
		return (
			<View>
				<Calendar events={this.state.events}/>
			</View>	
		)
	}
}

export default Itinerary;