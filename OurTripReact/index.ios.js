import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Itinerary from './src/Itinerary'

const App = () => (
  <Itinerary />
  );

AppRegistry.registerComponent('OurTripReact', () => App);
