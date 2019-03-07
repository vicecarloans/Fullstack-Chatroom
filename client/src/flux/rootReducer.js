import { combineReducers } from 'redux';
import realtimeReducer from './ducks/realtime';

export default combineReducers({
	realtime: realtimeReducer,
});
