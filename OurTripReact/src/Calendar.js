import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Event from './Event'

class Calendar extends Component {

	render(){
		return (
			<View>
				<Text>
					DAY 1: 
				</Text>
				<Event events={this.props.events} />
			</View>	
		)
	}
}

export default Calendar;