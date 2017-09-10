import React, { Component } from 'react';
import { View, Text } from 'react-native';

const EventDetails = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Text>{props.event.title}</Text>
			<Text>{props.event.description}</Text>
			<Text>{props.event.start_time}</Text>
			<Text>{props.event.end_time}</Text>
		</View>	
	)
}

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		padding: 3
	}
}

export default EventDetails;