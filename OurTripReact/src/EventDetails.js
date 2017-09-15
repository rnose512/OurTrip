import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'native-base'

const EventDetails = (props) => {



	return (
		<View style>
			<Text style= {styles.header}>{props.event.title}</Text>
		<Card style= {styles.box}>
			<Text style = {styles.description}>{props.event.description}</Text>
			<Text style= {styles.time}>{props.event.start_time}</Text>
			<Text >{props.event.end_time}</Text>
		</Card>
		</View>
	)
}

const styles = {
	box:{
		marginRight: 10,
		marginLeft: 10,
		borderWidth: 1,
		borderRadius: 2,
		opacity: .6,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
		padding: 3
	},
	header: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center',
    color: 'white',
	},
	description:{
		fontWeight: 'bold',
		padding: 3,
	},
	time:{
		padding:3,
	}
}

export default EventDetails;
