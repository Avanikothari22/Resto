import { createStore, applyMiddleware, compose } from  'redux';
import { AsyncStorage } from 'react-native';
import reducer from './reducers';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

export default function configureStore(onCompletion) {
    const enhancer = compose(
        applyMiddleware(
            thunk,
        ), 
    );
    const store = createStore(reducer, enhancer);
    persistStore(store, {storage: AsyncStorage}, onCompletion);
}
