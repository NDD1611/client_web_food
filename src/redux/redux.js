import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import userReducer from './Reducer/userReducer';
import headerReducer from './Reducer/headerReducer';
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

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ["username", "password", "firstname", "lastname", "address", "phonenumber", "gender", "role"]
}

const rootReducer = combineReducers({
    header: persistReducer(headerPersistConfig, headerReducer),
    user: persistReducer(userPersistConfig, userReducer)
})
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer)
export const persistor = persistStore(store);

export default store;