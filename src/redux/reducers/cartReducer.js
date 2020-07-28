import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isOpen: false
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TRIGGER_CART_MENU: 
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default: 
            return state;
    }
}

export default cartReducer;