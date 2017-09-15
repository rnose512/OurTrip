import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Event from './Event'

class Calendar extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<View style={styles.container}>
					<Event style={styles.event} events={this.props.events} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
   flex: 1,
   width: 400,
	 height: 40,

  },
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
