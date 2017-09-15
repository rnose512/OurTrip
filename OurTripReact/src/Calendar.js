import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Event from './Event'

class Calendar extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<View style >
					<Event style={styles.event} events={this.props.events} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  event: {
    flex: 2,
		alignItems: 'center',
		borderColor: 'blue',

  },
  dock: {
    flex: 1,
  }
})


export default Calendar;
