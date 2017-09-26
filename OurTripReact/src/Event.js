import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventDetail from './EventDetails'

class Event extends Component {
	constructor(props){
		super(props)
	}
	
	renderEvents() {
		return this.props.events.map(event =>
			<EventDetail key={event.title} event={event} />
		)
	}

	render(){
		return (
			<View>
				<View>
					{this.renderEvents()}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
   flex: 1,
   bottom: 0,
  },
  event: {
    flex: 2,
  },
  dock: {
    flex: 1,
  }
})

export default Event;
