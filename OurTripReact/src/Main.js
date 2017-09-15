import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { TabNavigator } from 'react-navigation'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

	var MainScreenNavigator = TabNavigator({
	  Tab1: {screen: FirstScreen},
	  Tab2: {screen: SecondScreen}
	});

	MainScreenNavigator.navigationOptions = {
	  title: "Tab example"
	}

export default MainScreenNavigator;

