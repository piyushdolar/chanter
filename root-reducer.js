const { combineReducers } = require('redux');
const { CrackWatchReducer } = require('./components/CrackWatch/CrackWatch.reducers');

export const rootReducer = combineReducers({
	Games: CrackWatchReducer,
});
