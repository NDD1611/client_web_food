import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import headerReducer from './Reducer/headerReducer';
import testReducer from './Reducer/testReducer';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const headerPersistConfig = {
    ...persistCommonConfig,
    key: 'header',
    whitelist: ['isHeader']
}

const rootReducer = combineReducers({
    header: persistReducer(headerPersistConfig, headerReducer),
    test: testReducer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer)
export const persistor = persistStore(store);

export default store;