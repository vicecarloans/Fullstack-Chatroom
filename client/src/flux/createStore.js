import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { realtimeSagaWatcher } from './ducks/realtime';

const sagaMiddleware = createSagaMiddleware();

const sagaWatchers = [realtimeSagaWatcher];

export default () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);

	sagaWatchers.forEach(saga => {
		sagaMiddleware.run(saga);
	});

	return store;
};
