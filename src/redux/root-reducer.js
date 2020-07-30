import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import directoryReducer from './reducers/directoryReducer';
import shopDataReducer from './reducers/shopDataReducer';
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopData: shopDataReducer
});

export default persistReducer(persistConfig, rootReducer);  