import userReducer from '../redux/user/userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
});