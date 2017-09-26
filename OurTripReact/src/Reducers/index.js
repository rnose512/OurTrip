import { combineReducers } from 'redux';
import TripReducer from './TripReducer'

export default combineReducers({
	trips: TripReducer
});