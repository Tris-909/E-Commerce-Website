import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});