import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventDetail from './EventDetails'

class Event extends Component {
	renderEvents() {
		return this.props.events.map(event => 
			<EventDetail key={event.title} event={event} />
		)
	}

	render(){
		return (
			<View>
				{this.renderEvents()}
			</View>	
		)
	}
}

export default Event;